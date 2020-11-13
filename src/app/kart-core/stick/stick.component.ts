import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stick } from '../../shared/models/stick';
import { BindingsService } from '../../shared/services/bindings.service';

@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.scss']
})
export class StickComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public stick: Stick = null;

  constructor(private bindingsService: BindingsService) { }

  ngOnInit(): void {
    this.subs.push(this.bindingsService.stickState.subscribe(stick => {
      this.stick = stick;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }

  getContentStyle() {
    return {
      width: (this.stick.radius*2) + 'px',
      height: (this.stick.radius*2) + 'px',
      left: (this.stick.begin.x - this.stick.radius) + 'px',
      top: (this.stick.begin.y - this.stick.radius - 10) + 'px'
    };
  }

  getCurrentStyle() {
    return {
      left: (this.stick.current.x - this.stick.begin.x + this.stick.radius) + 'px',
      top: (this.stick.current.y - this.stick.begin.y + this.stick.radius) + 'px'
    }
  }

}
