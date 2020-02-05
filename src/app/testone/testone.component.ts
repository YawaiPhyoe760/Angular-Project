import { Component, OnInit } from '@angular/core';
import { BmservicesService } from '../sysgem/bmservices.service';

@Component({
  selector: 'bm-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.css']
})
export class TestoneComponent implements OnInit {
  dataAry: string[] = [];
  
  
  constructor(private bm: BmservicesService) {
    
   }

  ngOnInit() {
   this.dataAry=this.bm.getData();
  }

  addData(data) {
    this.bm.addData(data);
  }
}
