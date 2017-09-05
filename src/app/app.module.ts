import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { MynetworkComponent } from './mynetwork.component';
import { JobComponent } from './job.component';
import { MessageComponent } from './message.component';
import { NoticationComponent } from './notication.component';
import { appRoutes } from './app.routes';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, MynetworkComponent, JobComponent, MessageComponent, NoticationComponent
  ],
  imports: [
    BrowserModule, appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
