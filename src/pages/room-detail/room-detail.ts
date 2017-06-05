import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Booking } from './../booking/booking';

@Component({
  templateUrl: 'room-detail.html',
})

export class RoomDetail {
  constructor(private navParams: NavParams,  public navCtrl : NavController) {
    let id = navParams.get('id');
    let name = navParams.get('name');
  }
  reserve() {
    this.navCtrl.push(Booking, {});
  }

}
