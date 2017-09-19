import { Component, OnInit } from "@angular/core";
import {Http} from  "@angular/http";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit {
  public name: string;
  public now: Date;

  public model = {
    value : 42
  }

cats =[
  {name: 'Zorro'},
  {name: 'Sara'}
]

  constructor(private http: Http) {}

  ngOnInit() {
    this.name = "Karel";
    this.now =new Date();

  } 

  onCLick(){
    // alert()

    this.cats.push({name: 'Diego'})
  }
}
