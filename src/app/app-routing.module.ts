import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/modules/auth.module').then(mod => mod.AuthModule) },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
