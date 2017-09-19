import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  show = true
  cats : any[]
  constructor() { }

  ngOnInit() {

    this.cats = [
      {
        name: 'Zorro'
      }
    ]
  }

}
