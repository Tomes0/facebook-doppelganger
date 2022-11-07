import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/modules/home.module').then(mod => mod.HomeModule) },
  { path: 'myprofile', loadChildren: () => import('./modules/modules/user-profile.module').then(mod => mod.UserProfileModule), canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
