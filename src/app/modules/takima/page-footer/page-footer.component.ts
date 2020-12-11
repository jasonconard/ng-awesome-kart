import { Component, Input, OnInit } from '@angular/core';
import { FooterService } from '../shared/services/footer.service';
import { FooterBtn } from '../shared/models/footerBtn';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {

  @Input() btns: FooterBtn[];

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
  }

  public onBtnClick(btn: FooterBtn) {
    this.footerService.setAction(btn.action);
  }

}
