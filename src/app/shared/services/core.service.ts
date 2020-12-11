import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public forcedFullscreen = false;
  private forcedFullscreenSubject = new Subject<boolean>();
  public forcedFullscreenState = this.forcedFullscreenSubject.asObservable();

  constructor() {
  }

  initData() {
  }

  setForcedFullscreen(forced: boolean) {
    this.forcedFullscreen = forced;
    this.forcedFullscreenSubject.next(forced);
  }
}
