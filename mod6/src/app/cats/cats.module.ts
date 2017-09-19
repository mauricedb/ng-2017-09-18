import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats/cats.component';
import { CatComponent } from './cat/cat.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CatsComponent, CatComponent],
  exports: [CatsComponent]
})
export class CatsModule { }
