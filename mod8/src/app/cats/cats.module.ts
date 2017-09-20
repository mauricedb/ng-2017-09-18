import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CatComponent],
  exports: [CatComponent]
})
export class CatsModule { }
