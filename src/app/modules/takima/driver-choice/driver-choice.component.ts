import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { DriverService } from '../../kart/shared/services/driver.service';
import { Driver } from '../../kart/shared/models/driver';
import { FooterService } from '../shared/services/footer.service';
import { Router } from '@angular/router';
import { GameService } from '../../kart/shared/services/game.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { ControlsService } from '../../kart/shared/services/controls.service';
import { FooterAction } from '../shared/models/footerBtn';
import { CoreService } from '../../../shared/services/core.service';

interface PlayerGrid {
  nbItemPerRow: number,
  nbRow: number,
  rowWidth: number
}

@Component({
  selector: 'app-driver-choice',
  templateUrl: './driver-choice.component.html',
  styleUrls: ['./driver-choice.component.scss'],
  animations: [
    trigger('nameAnim', [
      transition(':decrement, :increment', [
        style({ opacity: 0, transform: 'translate3D(0, 30px, 0) scale(0.3)' }),
        animate('200ms', style( { opacity: 1, transform: 'translate3D(0,0,0) scale(1)' }))
      ])
    ]),
    trigger('errorAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate3D(0, 30px, 0) scale(0.3)' }),
        animate('200ms', style( { opacity: 1, transform: 'translate3D(0,0,0) scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 0, transform: 'translate3D(0, 0, 0) scale(1)' }),
        animate('200ms', style( { opacity: 1, transform: 'translate3D(0,30px,0) scale(0.3)' }))
      ])
    ])
  ]
})
export class DriverChoiceComponent implements OnInit, OnDestroy {

  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('driverList', { static: true }) driverList: ElementRef;

  private subs: Subscription[] = [];

  public playerName: string = this.gameService.playerName;
  public selectedDriver: Driver = null;
  public selectedDriverId: number = 0;

  public error: boolean = false;

  public playerGrid: PlayerGrid

  public drivers: Driver[] = [];

  private fieldFocus: boolean = false;
  private fieldFocusTimeout: number = -1;
  private confirming: boolean = false;

  constructor(private driverService: DriverService,
              private gameService: GameService,
              private coreService: CoreService,
              private router: Router,
              private controlsService: ControlsService,
              private footerService: FooterService) { }

  ngOnInit(): void {
    this.subs.push(this.driverService.driversState.subscribe(drivers => {
      this.drivers = drivers;
      this.selectDriver(this.driverService.currentDriver || this.drivers[0]);
      setTimeout(() => {
        this.updatePlayerGrid();
      });
    }));

    this.subs.push(this.footerService.actionState.subscribe( action => {
      if(action === FooterAction.game) {
        this.confirm();
      }
    }));

    this.subs.push(this.controlsService.keydownState.subscribe(keyCode => {
      this.manageKeyboard(keyCode);
    }));

    this.subs.push(fromEvent(window, 'resize').subscribe(() => {
      if(this.fieldFocus && window.innerHeight < 200) {
        this.coreService.setForcedFullscreen(true);
      } else {
        this.coreService.setForcedFullscreen(false);
      }
      this.updatePlayerGrid();
    }));

    if(!this.controlsService.isTouchDevice) {
      this.nameInput.nativeElement.focus();
    }
  }

  public confirm() {
    this.error = false;

    if (!this.playerName.trim() || this.playerName.trim().length < 2 || !(/^[a-zA-Z0-9\-]*$/.test(this.playerName))) {
      this.error = true; return;
    }

    this.gameService.setPlayerName(this.playerName.trim());
    this.driverService.selectDriver(this.selectedDriver);

    if(this.fieldFocus) {
      this.confirming = true;
    } else {
      this.router.navigate(['takima/game']);
    }
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }

  selectDriver(driver: Driver) {
    this.selectedDriver = driver;
    this.selectedDriverId = this.drivers.findIndex( driver => driver.id === this.selectedDriver.id);
  }

  manageKeyboard(keyCode: string) {
    if(document.activeElement !== this.nameInput.nativeElement) {
      if(this.playerGrid) {
        let nextDriverIndex = -1;
        switch (keyCode) {
          case 'ArrowUp': nextDriverIndex = this.selectedDriverId - this.playerGrid.nbItemPerRow; break;
          case 'ArrowDown': nextDriverIndex = this.selectedDriverId + this.playerGrid.nbItemPerRow; break;
          case 'ArrowLeft': {
            if((this.selectedDriverId % this.playerGrid.nbItemPerRow) > 0) {
              nextDriverIndex = this.selectedDriverId - 1;
            }
            break;
          }
          case 'ArrowRight': {
            if((this.selectedDriverId % this.playerGrid.nbItemPerRow) < this.playerGrid.nbItemPerRow -1) {
              nextDriverIndex = this.selectedDriverId + 1;
            }
            break;
          }
        }

        const driver = this.drivers[nextDriverIndex];
        if(driver) {
          this.selectDriver(driver);
        }
      }
    } else {
      if(keyCode === 'Enter') {
        this.nameInput.nativeElement.blur();
        this.confirm();
      }
    }
  }

  getRowWidth() {
    return { 'max-width': this.playerGrid ? (this.playerGrid.rowWidth + 'px') : 'none' };
  }

  updatePlayerGrid() {
    const width = this.driverList.nativeElement.getBoundingClientRect().width;

    const padding = 20;
    const itemWidth = 100;
    const modulo = (width - padding) % itemWidth;
    const rowWidth = (width - padding) - modulo;
    const nbItemPerRow = rowWidth / itemWidth;
    const nbRow = Math.ceil(this.drivers.length / nbItemPerRow);

    this.playerGrid = { nbItemPerRow, nbRow, rowWidth };
  }

  toggleFieldFocus(focused: boolean) {
    clearTimeout(this.fieldFocusTimeout);
    if(!focused) {
      this.fieldFocusTimeout = window.setTimeout( () => {
        if(this.confirming) {
          this.router.navigate(['takima/game']);
        }
        this.confirming = false;
        this.fieldFocus = false;
      }, 250);
    } else {
      this.fieldFocus = true;
    }
  }
}
