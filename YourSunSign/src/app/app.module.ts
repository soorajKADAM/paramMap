import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from '../../../YourSunSign/src/app/material.module';
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { SunsignsModule } from './sunsigns/sunsigns.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SunsignsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgParticlesModule,
    HttpClientModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
