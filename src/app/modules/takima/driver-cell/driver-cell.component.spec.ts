import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DriverCellComponent } from './driver-cell.component';

describe('DriverCellComponent', () => {
  let component: DriverCellComponent;
  let fixture: ComponentFixture<DriverCellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
