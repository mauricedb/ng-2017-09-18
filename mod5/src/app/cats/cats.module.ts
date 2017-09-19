import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CatComponent } from './cat/cat.component';
import { CatItemComponent } from './cat-item/cat-item.component';
import { HideDirective } from './hide.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CatComponent, CatItemComponent, HideDirective],
  exports: [CatComponent]
})
export class CatsModule { }
