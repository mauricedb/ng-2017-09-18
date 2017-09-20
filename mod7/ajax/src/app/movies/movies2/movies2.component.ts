import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";

import "../movies/rx-operators";

@Component({
  selector: "app-movies2",
  templateUrl: "./movies2.component.html",
  styleUrls: ["./movies2.component.css"]
})
export class Movies2Component implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies$ ;

  ngOnInit() {
    this.movies$ = this.moviesService.getMovies();
  }
}
