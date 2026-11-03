import { provideZoneChangeDetection } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, {
  // The app relies on zone.js to trigger change detection (Angular is zoneless by default since v21).
  applicationProviders: [provideZoneChangeDetection()]
})
  .catch(err => console.error(err));
