import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http'
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies.service';
import { Movies2Component } from './movies2/movies2.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [MoviesComponent, Movies2Component],
  exports: [MoviesComponent, Movies2Component],
  providers: [MoviesService]
})
export class MoviesModule { }
