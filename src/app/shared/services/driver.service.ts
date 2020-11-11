import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { BehaviorSubject } from 'rxjs';
import { MoveAction, Racer } from '../models/racer';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private driversSubject = new BehaviorSubject<Driver[]>([]);
  public driversState = this.driversSubject.asObservable();

  public drivers: Driver[] = [];
  public currentDriver: Driver = null;

  constructor() { }

  loadDrivers(jsonDrivers: any[]) {
    this.drivers = jsonDrivers.map( jsonDriver => {
      return Driver.fromJson(jsonDriver);
    });

    this.currentDriver = this.drivers[0];
    this.driversSubject.next(this.drivers);
  }

  selectDriver(driver: Driver) {
    this.currentDriver = driver;
  }

  public getCarMaxSpeed(racer: Racer): number{
    return (4 + 0.3*racer.driver.stats.speed) * 40 * (racer.ground || 1);
  }

  public getCarMaxBackSpeed(racer: Racer): number{
    return (4 + 0.3*racer.driver.stats.speed) * 12 * (racer.ground || 1);
  }

  public getCarCurrentAccelerationLevel(method: MoveAction, racer: Racer): number{

    let nextAccLevel = racer.accelerationLevel;

    if(method === MoveAction.go_forward){
      nextAccLevel = racer.accelerationLevel >= 0 ? racer.accelerationLevel+1 : racer.accelerationLevel+3;
    } else if(method === MoveAction.go_backward){
      nextAccLevel = racer.accelerationLevel < 0 ? racer.accelerationLevel-1 : racer.accelerationLevel-3;
    } else if(method === MoveAction.no_move){
      if(racer.accelerationLevel){
        nextAccLevel = racer.accelerationLevel >= 0 ? racer.accelerationLevel-1 : racer.accelerationLevel+1;
      }
    }


    const stats = racer.driver.stats;

    if(stats.acceleration * nextAccLevel <= this.getCarMaxSpeed(racer) && stats.acceleration * nextAccLevel >= -this.getCarMaxBackSpeed(racer)){
      return nextAccLevel;
    } else {
      if(racer.accelerationLevel > 0){
        return racer.accelerationLevel-1;
      } else {
        return racer.accelerationLevel+1; // Fix bound out after bonus/malus
      }
    }
  }

  public getCarCurrentSpeed(racer: Racer) {
    if(racer.bonus > 1 && racer.ground !== 0){
      return racer.driver.stats.acceleration * racer.accelerationLevel * racer.bonus;
    } else {
      return racer.driver.stats.acceleration * racer.accelerationLevel * racer.bonus * racer.ground;
    }
  }
}
