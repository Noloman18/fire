import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialViewDemoComponent } from './material-view-demo/material-view-demo.component';
import { FutureValueComponent } from './future-value/future-value.component';
import { AddFutureValueComponent } from './add-future-value/add-future-value.component';
import { ViewFutureValueComponent } from './view-future-value/view-future-value.component';
import { ViewFinancialInstrumentsComponent } from './view-financial-instruments/view-financial-instruments.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationOutcomeComponent } from './authentication-outcome/authentication-outcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialViewDemoComponent,
    FutureValueComponent,
    AddFutureValueComponent,
    ViewFutureValueComponent,
    ViewFinancialInstrumentsComponent,
    HomeComponent,
    AuthenticationOutcomeComponent
  ],
  imports: [
    AmplifyAngularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
