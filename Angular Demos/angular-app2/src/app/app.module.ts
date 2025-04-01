import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LuckyNumberComponent } from './lucky-number/lucky-number.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { SimpleForm2Component } from './simple-form2/simple-form2.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LuckyNumberComponent,
    ProductListingComponent,
    SimpleFormComponent,
    CalculatorComponent,
    SimpleForm2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
