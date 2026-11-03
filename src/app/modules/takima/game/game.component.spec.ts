import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TakimaModule } from '../takima.module';
import { AudioService } from '../../kart/shared/services/audio.service';
import { GameComponent } from './game.component';

// jsdom has no Web Audio API: stub the audio layer.
const audioServiceStub: Partial<AudioService> = {
  playSound: () => {},
  stopSound: () => {},
  updatePitch: () => {},
  updateVolume: () => {}
};

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakimaModule],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(),
        { provide: AudioService, useValue: audioServiceStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
