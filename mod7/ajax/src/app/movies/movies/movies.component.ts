import { Subscription } from 'rxjs/Rx';
import { MoviesService } from "../movies.service";
import { Component, OnInit } from "@angular/core";

import './rx-operators';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  movies;
  subscription: Subscription;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.subscription = this.moviesService
      .getMovies()
      .do(console.table)
      .subscribe(movies => (this.movies = movies));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
