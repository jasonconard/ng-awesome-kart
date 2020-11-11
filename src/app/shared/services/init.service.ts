import { Injectable } from '@angular/core';
import { RequestConfig } from '../models/requestConfig';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { DriverService } from './driver.service';
import { CircuitService } from './circuit.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

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
}
