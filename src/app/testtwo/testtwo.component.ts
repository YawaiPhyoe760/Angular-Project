import { Component, OnInit } from '@angular/core';
import { BmservicesService } from '../sysgem/bmservices.service';

@Component({
  selector: 'bm-testtwo',
  templateUrl: './testtwo.component.html',
  styleUrls: ['./testtwo.component.css']
})
export class TesttwoComponent implements OnInit {
  dataAry:string[] = [];
  
  constructor(private bm: BmservicesService) {

   }

  ngOnInit() {
    this.dataAry=this.bm.getData();
  }

}
