import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
  hotels: any[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    window['plugins'].HotelLister.queryHotels((hotels) => {
      this.hotels = hotels;
      console.log('HOTEL: ', this.hotels);
    });
  }

}
