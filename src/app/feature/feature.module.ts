import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../core/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SongManagementComponent } from './song-management/song-management.component';


@NgModule({
  declarations: [FeatureComponent, HomeComponent, HeaderComponent, ProfileComponent, SongManagementComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
