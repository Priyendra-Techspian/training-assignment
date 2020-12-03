import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthLayoutComponent } from './authentication/auth-layout/auth-layout.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './authentication/store/effects/auth.effects';



@NgModule({
  declarations: [  HeaderComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    // EffectsModule.forFeature([AuthEffects])
  ]
})
export class CoreModule { }
