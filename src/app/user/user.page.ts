import { Component, OnInit } from '@angular/core';
import { Cordova } from '@ionic-native/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: any[];

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    window['plugins'].HotelLister.getUser((hotels) => {
      this.user = hotels;
      console.log('HOTEL: ', this.user);
    });
  }

  addUser() {
    console.log('adding a user');
    // tslint:disable-next-line:no-string-literal
    window['plugin'].HotelLister.addUser((result) => {
      if (result) {
        console.log('succes');
      }
    });
  }
}
