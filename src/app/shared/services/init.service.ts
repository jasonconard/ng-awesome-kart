import { Injectable } from '@angular/core';
import { RequestConfig } from '../models/requestConfig';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { DriverService } from './driver.service';
import { CircuitService } from './circuit.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  public forcedFullscreen = false;
  private forcedFullscreenSubject = new Subject<boolean>();
  public forcedFullscreenState = this.forcedFullscreenSubject.asObservable();

  constructor(private requestService: RequestService,
              private circuitService: CircuitService,
              private driverService: DriverService) {
  }

  initData() {
    const requestConfig = new RequestConfig('GET', 'assets/json/gamedata.json');

    this.requestService.doRequest(requestConfig).pipe( map( res => {
      this.driverService.loadDrivers(res.body.drivers);
      this.circuitService.setCircuitList(res.body.circuits);
    })).subscribe();
  }


  setForcedFullscreen(forced: boolean) {
    this.forcedFullscreen = forced;
    this.forcedFullscreenSubject.next(forced);
  }
}
