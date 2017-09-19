import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.css"]
})
export class CatsComponent implements OnInit {
  cats;

  constructor() {}

  ngOnInit() {
    this.cats = [{ name: "Zorro" }, { name: "Sara" }, { name: "Diego" }];
  }

  deleteTheCat(index) {
    console.log("Deleting", index);
    this.cats.splice(index, 1);
  }

  count = 0;
  showMe() {
    console.count("showMe");

    // this.count++;

    return this.count;
  }

}
