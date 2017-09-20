import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cat",
  templateUrl: "./cat.component.html",
  styleUrls: ["./cat.component.css"]
})
export class CatComponent implements OnInit {
  cat = {
    name: "Zorro",
    age: 12
  };

  constructor() {}

  ngOnInit() {}

  save(){
    console.log(this.cat)
  }
}
