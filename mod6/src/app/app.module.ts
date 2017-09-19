import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatsModule } from './cats/cats.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
