import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FooterBtn } from './shared/models/footerBtn';
import { CoreService } from '../../shared/services/core.service';

@Component({
  selector: 'takima-root',
  templateUrl: './takima.component.html',
  styleUrls: ['./takima.component.scss']
})
export class TakimaComponent implements OnInit{

  public routeOptions: { headerTitle: string, footerBtns: FooterBtn[], fullscreen: boolean } = {
    headerTitle: '',
    footerBtns: [],
    fullscreen: false
  }

  public forcedFullscreen: boolean = this.coreService.forcedFullscreen;

  constructor(private router: Router,
              private coreService: CoreService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('init takima component');

    this.forcedFullscreen = this.coreService.forcedFullscreen;

    this.coreService.forcedFullscreenState.subscribe(forced => {
      this.forcedFullscreen = forced;
    });

    this.initRoute();

    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.initRoute();
      }
    });
  }

  initRoute(): void {
    const firstChild = this.activatedRoute.snapshot.firstChild;
    console.log(firstChild);
    if (firstChild) {
      this.routeOptions.headerTitle = firstChild.data['title'] || '';
      this.routeOptions.footerBtns = firstChild.data['footerBtns'] || [];
      this.routeOptions.fullscreen = !!firstChild.data['fullscreen'];
    }
  }
}
