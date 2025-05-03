import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { finalizeInterceptor } from './core/interceptors/finalize.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes,withViewTransitions()),provideHttpClient(withFetch(),withInterceptors([loadingInterceptor,errorsInterceptor,finalizeInterceptor])),
     provideAnimations(),
     provideToastr({
      closeButton:true,
      progressBar:true,
      progressAnimation:"increasing",
      timeOut: 3000
     }),
     importProvidersFrom(NgxSpinnerModule)
    ]
};
