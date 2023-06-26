import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxRibbonModule } from 'ngx-ribbon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRibbonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
