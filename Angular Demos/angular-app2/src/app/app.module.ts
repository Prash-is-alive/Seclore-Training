import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LuckyNumberComponent } from './lucky-number/lucky-number.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LuckyNumberComponent,
    ProductListingComponent,
    SimpleFormComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
