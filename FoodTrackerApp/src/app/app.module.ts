import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OverzichtComponent } from './overzicht/overzicht.component';
import { ProductenComponent } from './producten/producten.component';
import { MaaltijdenComponent } from './maaltijden/maaltijden.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverzichtComponent,
    ProductenComponent,
    MaaltijdenComponent,
    HeaderComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
