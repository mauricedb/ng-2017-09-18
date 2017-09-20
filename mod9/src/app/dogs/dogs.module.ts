import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { RouterModule } from "@angular/router";

export  { DogComponent } from './dog/dog.component';;

var routeModule = RouterModule.forChild([
  {path: "", component: DogComponent},
])

@NgModule({
  imports: [
    CommonModule,
    routeModule
  ],
  declarations: [DogComponent],
  exports: [DogComponent]
})
export class DogsModule { }
