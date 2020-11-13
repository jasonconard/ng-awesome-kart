import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FooterBtn } from './shared/models/footerBtn';
import { InitService } from './shared/services/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public deviceFullscreenEnabled: boolean = false;

  public forcedFullscreen: boolean = false;

  public routeOptions: { headerTitle: string, footerBtns: FooterBtn[], fullscreen: boolean } = {
    headerTitle: '',
    footerBtns: [],
    fullscreen: false
  }

  constructor(private router: Router,
              private initService: InitService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.forcedFullscreen = this.initService.forcedFullscreen;

    this.initService.initData();

    this.initService.forcedFullscreenState.subscribe(forced => {
      this.forcedFullscreen = forced;
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const firstChild = this.activatedRoute.snapshot.firstChild;
        if (firstChild) {
          this.routeOptions.headerTitle = firstChild.data['title'] || '';
          this.routeOptions.footerBtns = firstChild.data['footerBtns'] || [];
          this.routeOptions.fullscreen = !!firstChild.data['fullscreen'];
        }
      }
    });
  }

  toggleFullscreen() {
    if(this.deviceFullscreenEnabled) {
      const rfs = document.exitFullscreen || document['webkitExitFullscreen'] || document['mozCancelFullScreen'] || document['msExitFullscreen'];
      rfs.call(document);
      this.deviceFullscreenEnabled = false;
    } else {
      const el = document.documentElement;
      const rfs = el.requestFullscreen || el['webkitRequestFullscreen'] || el['mozRequestFullScreen'] || el['msRequestFullscreen'];
      rfs.call(el);
      this.deviceFullscreenEnabled = true;
    }
  }
}
