import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SoftwareComponent } from './software/software.component';



@NgModule({
  declarations: [
    AppComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [SoftwareComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
