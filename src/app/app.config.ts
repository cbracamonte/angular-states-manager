import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
//Ngrx Imports
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

//Ngxs Imports
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

//RxState Imports
import {
  provideRxStateConfig,
  withScheduler,
  withSyncScheduler,
} from '@rx-angular/state';

// App Imports
import { routes } from './app.routes';
import { asapScheduler } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      // Ngrx
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      // Ngxs
      NgxsModule.forRoot(),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsLoggerPluginModule.forRoot()
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: isDevMode() }),
    /* RxState
     To more information about RxState - Scheduler, check the official documentation: https://www.rx-angular.io/docs/state/getting-started#scheduler
    */
    provideRxStateConfig(withScheduler(asapScheduler)),
  ],
};
