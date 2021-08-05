import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftwareComponent } from './software/software.component';



@NgModule({
  declarations: [
    AppComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [SoftwareComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
