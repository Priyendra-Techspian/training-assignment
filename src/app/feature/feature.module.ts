import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../core/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SongManagementComponent } from './song-management/song-management.component';
import { EffectsModule } from '@ngrx/effects';
import { SongEffects } from './store/song.effects';
import { StoreModule } from '@ngrx/store';
// import * as song from './reducers';
import * as song from './store/song.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateSongComponent } from './add-update-song/add-update-song.component';


@NgModule({
  declarations: [FeatureComponent, HomeComponent, HeaderComponent, ProfileComponent, SongManagementComponent, AddUpdateSongComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([SongEffects]),
    StoreModule.forFeature(song.songFeatureKey, song.reducer) //, { metaReducers: song.metaReducers }
  ]
 
})
export class FeatureModule { }
