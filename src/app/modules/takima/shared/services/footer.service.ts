import { Injectable } from '@angular/core';
import { FooterAction } from '../models/footerBtn';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { URL_SITE } from '../../takima.constants';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private actionSubject = new Subject<FooterAction>();
  public actionState = this.actionSubject.asObservable();

  constructor(private router: Router) { }

  setAction(action: FooterAction) {
    this.actionSubject.next(action);
    switch (action) {
      case FooterAction.about: this.router.navigate(['takima/about']); break;
      case FooterAction.help: this.router.navigate(['takima/welcome']); break;
      case FooterAction.game: break;
      case FooterAction.driver: this.router.navigate(['takima/driver-choice']); break;
      case FooterAction.exit: window.open(URL_SITE, '_self'); break;
    }
  }
}
