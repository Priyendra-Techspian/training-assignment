import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './core/authentication/auth-layout/auth-layout.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  { path : '', redirectTo : 'app/home', pathMatch : 'prefix' },
  { path : '', component : AuthLayoutComponent,
    children: [
      { path : 'login', loadChildren : () => 
        import('./feature/login/login.module').then(m => m.LoginModule) } //, canActivate:[UnauthorizedAuthGuard]       
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
