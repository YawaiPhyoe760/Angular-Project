import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmservicesService {

  constructor() { }
  data: string[] = [];
  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}
