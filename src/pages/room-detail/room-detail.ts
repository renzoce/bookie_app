import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'room-detail.html',
})

export class RoomDetail {
  constructor(private navParams: NavParams) {
    let id = navParams.get('id');
    let name = navParams.get('name');
  }
}
