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

    this.initService.initData();

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
}
