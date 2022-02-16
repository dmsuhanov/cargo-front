import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { CustomerComponent } from './customer/customer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CargoClientService } from './service/cargo-client/cargo-client.service';
import { CustomerRowComponent } from './customer-row/customer-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonLinkComponent,
    CustomerComponent,
    NotFoundComponent,
    HomeComponent,
    CustomerRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
