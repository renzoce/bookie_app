import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RehearsalRoom } from './../../model/rehearsalRoom';
import { LoadingController } from 'ionic-angular';
import { BookingPage } from './../booking/booking';
import { RehearsalRoomService } from './../../services/rehearsal-room-service';
import { AvailableDay } from './../../model/availableDay';

@Component({
  selector: 'page-room-detail',
  templateUrl: 'room-detail.html',
  styleUrls: ['/room-detail.scss']
})

export class RoomDetail {
  availableDay: AvailableDay[] = [];
  room: RehearsalRoom = null;
  
  constructor(private navParams: NavParams, public navCtrl: NavController, private rehearsalRoomService: RehearsalRoomService, public loadingCtrl: LoadingController) {
    this.room = this.navParams.get('roomSelected');
  }
  ionViewWillEnter() {

  }

  reserve() {
    this.showLoading("Por favor espera...")
  }
  //Will be in a Component!
  showLoading(contentWait) {
    let loader = this.loadingCtrl.create({
      content: contentWait
    });
    loader.present();
    this.rehearsalRoomService.getAvailability(1)
      .then(availableDay => {
        this.availableDay = availableDay
        loader.dismiss();
        this.navCtrl.push(BookingPage, {availableDay});
      }, reason => { });
  }
}
