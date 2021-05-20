import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CbdropdownModule } from './cbdropdown/cbdropdown.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CbdropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
