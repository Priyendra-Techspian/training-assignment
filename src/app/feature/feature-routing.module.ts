import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../core/authentication/auth-layout/auth-layout.component';
import { UnauthorizedAuthGuard } from '../core/guard/unauthorized-auth.guard';
import { AddUpdateSongComponent } from './add-update-song/add-update-song.component';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';
import { SongManagementComponent } from './song-management/song-management.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent, },
  { path: 'song-management', component: SongManagementComponent },
  { path: 'add-song', component: AddUpdateSongComponent },
  { path: 'edit-song/:songId', component: AddUpdateSongComponent },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
