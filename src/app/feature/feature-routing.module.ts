import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../core/authentication/auth-layout/auth-layout.component';
import { UnauthorizedAuthGuard } from '../core/guard/unauthorized-auth.guard';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  { path: 'home', component: HomeComponent, }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
