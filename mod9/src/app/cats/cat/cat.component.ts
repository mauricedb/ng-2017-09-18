import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cat",
  templateUrl: "./cat.component.html",
  styleUrls: ["./cat.component.css"]
})
export class CatComponent implements OnInit {
  name;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      console.log(p);
      this.name = p.name;
    });
  }
}
