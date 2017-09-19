import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from  "@angular/http";
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {Demo2} from './demo/demo2'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
