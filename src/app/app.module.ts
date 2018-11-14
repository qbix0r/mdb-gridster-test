import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material';
import {GridsterModule} from 'angular-gridster2';
import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    GridsterModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
