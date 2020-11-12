import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapChoiceComponent } from './map-choice.component';

describe('MapChoiceComponent', () => {
  let component: MapChoiceComponent;
  let fixture: ComponentFixture<MapChoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
