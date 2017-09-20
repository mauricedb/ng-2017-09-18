import { combineAll } from 'rxjs/operator/combineAll';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

var routeModule = RouterModule.forRoot([
  {
    path: "cat",
    loadChildren: './cats/cats.module#CatsModule'

  },
  {
    path: "dog",
    loadChildren: './dogs/dogs.module#DogsModule'
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
  imports: [BrowserModule, routeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
