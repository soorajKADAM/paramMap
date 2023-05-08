import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunsignsModule } from './sunsigns/sunsigns.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../../YourSunSign/src/app/material.module';
import { ParticlesModule } from 'angular-particle';
import { NgParticlesModule } from 'ng-particles';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SunsignsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
