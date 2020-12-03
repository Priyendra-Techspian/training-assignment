import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './core/authentication/auth-layout/auth-layout.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/authentication/store/effects/auth.effects';
import { reducers } from './core/authentication/store/app.states';
import { HttpConfigErrorInterceptor, HttpConfigInterceptor } from './core/interceptor/http-interceptor';
// import { reducers } from './feature/reducers';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
              {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
              {provide: HTTP_INTERCEPTORS, useClass: HttpConfigErrorInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
