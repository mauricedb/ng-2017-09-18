import { Component } from "@angular/core";

@Component({
  selector: "app-demo2",
  template: "Dit is demo 2 {{now}}"
})
export class Demo2 {
    now = new Date()
}