import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JkBarcodeModule } from 'jk-barcode';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JkBarcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
