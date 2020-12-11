import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoreService } from './services/core.service';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  imports: [],
  declarations: [TimePipe],
  exports: [TimePipe]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        CoreService
      ]
    };
  }
}
