import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ClockModule } from "./clock/clock.module";
import { CatsModule } from "./cats/cats.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClockModule, CatsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
