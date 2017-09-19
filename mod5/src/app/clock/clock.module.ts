import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { TimePipe } from './time.pipe';
import { TimeService } from './time.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClockComponent, TimePipe],
  exports: [ClockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class ClockModule { }
