import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class MoviesService {
  constructor(private http: Http) {}

  getMovies(): Observable<any> {
    return Observable.timer(0, 15 * 1000)
      .switchMap(() => this.http.get("/api/movies"))
      .map(rsp => rsp.json());
  }

  getMoviesOnce(): Observable<any> {
    return this.http.get("/api/movies").map(rsp => rsp.json());
  }
}
