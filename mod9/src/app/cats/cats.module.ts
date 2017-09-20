import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { RouterModule } from "@angular/router";

export { CatComponent } from './cat/cat.component';

var routeModule = RouterModule.forChild([
  {path: "cat/:name", component: CatComponent}
])

@NgModule({
  imports: [
    CommonModule,
    routeModule
  ],
  declarations: [CatComponent],
  exports: [CatComponent]
})
export class CatsModule { }
