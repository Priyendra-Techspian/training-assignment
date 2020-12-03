import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { features } from 'process';
import { AuthLayoutComponent } from './core/authentication/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { UnauthorizedAuthGuard } from './core/guard/unauthorized-auth.guard';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './feature/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'app/home', pathMatch:'full'},
  { path: '', redirectTo: 'app/home', pathMatch:'prefix'},
  // { path: 'web', loadChildren: ()=> import('./feature/feature.module').then(m => m.FeatureModule)}
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: 'login', loadChildren: ()=> import('./feature/login/login.module').then(m => m.LoginModule) }  //, canActivate:[UnauthorizedAuthGuard]       
    ]
  },
  {
    path: '', component: FeatureComponent, 
   children: [
     { path: 'app', loadChildren: ()=> import('./feature/feature.module').then(m=> m.FeatureModule)}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
