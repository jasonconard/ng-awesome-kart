import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TakimaModule } from '../takima.module';
import { DriverCellComponent } from './driver-cell.component';

describe('DriverCellComponent', () => {
  let component: DriverCellComponent;
  let fixture: ComponentFixture<DriverCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakimaModule],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverCellComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
