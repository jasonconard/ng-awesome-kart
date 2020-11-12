import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DriverStatsComponent } from './driver-stats.component';

describe('DriverStatsComponent', () => {
  let component: DriverStatsComponent;
  let fixture: ComponentFixture<DriverStatsComponent>;

  beforeEach(waitForAsync(() => {
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
