import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DriverChoiceComponent } from './player-choice.component';

describe('PlayerChoiceComponent', () => {
  let component: DriverChoiceComponent;
  let fixture: ComponentFixture<DriverChoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
