import { combineAll } from 'rxjs/operator/combineAll';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { DogsModule, DogComponent } from "./dogs/dogs.module";
import { CatsModule, CatComponent } from "./cats/cats.module";

var routeModule = RouterModule.forRoot([
  {
    path: "cat",
    component: CatComponent,

  },
  {
    path: "dog",
    component: DogComponent
  },
//   {
//     path: 'admin',
//     children: [
//       {}
//     ],
// canActivateChild: ....
//   }
  {
    path: '**',
    redirectTo: '/cat'
  },
]);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, routeModule, DogsModule, CatsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
