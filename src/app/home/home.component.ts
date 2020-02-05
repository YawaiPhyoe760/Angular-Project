import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = 'Starting';
  constructor() { }

  ngOnInit() {
  }

  addData() {
    alert(this.data);
  }

}
