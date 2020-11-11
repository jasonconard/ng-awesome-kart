import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverStatsComponent } from './driver-stats.component';

describe('DriverStatsComponent', () => {
  let component: DriverStatsComponent;
  let fixture: ComponentFixture<DriverStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
