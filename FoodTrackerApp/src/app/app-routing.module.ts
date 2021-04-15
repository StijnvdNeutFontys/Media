import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverzichtComponent } from './overzicht/overzicht.component'
import { ProductenComponent } from './producten/producten.component'
import { MaaltijdenComponent } from './maaltijden/maaltijden.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: 'overzicht', component: OverzichtComponent },
  { path: 'producten', component: ProductenComponent },
  { path: 'maaltijden', component: MaaltijdenComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
