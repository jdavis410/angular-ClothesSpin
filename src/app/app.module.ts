import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DropoffComponent } from './dropoff/dropoff.component';
import { ServiceComponent } from './service/service.component';
import { HistoryComponent } from './history/history.component';

import {MatButtonModule, MatStepperModule, MatExpansionModule} from '@angular/material';

import {AgmCoreModule} from '@agm/core';
import { Module as StripeModule } from 'stripe-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropoffComponent,
    ServiceComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfelAIvSQaJfWwHb33_43ZM_GpBicIpVg'
    }),
    StripeModule,
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
