import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCellComponent } from './driver-cell.component';

describe('DriverCellComponent', () => {
  let component: DriverCellComponent;
  let fixture: ComponentFixture<DriverCellComponent>;

  beforeEach(async(() => {
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
