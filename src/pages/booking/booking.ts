import { NavParams } from 'ionic-angular';
import { Input, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { AvailableDay } from './../../model/availableDay';
import { ToastController } from 'ionic-angular';
import { CalendarComponent } from './../../miscellaneous/calendar-component';

@Component({
  selector: 'calendar',
  templateUrl: 'booking.html'
})

export class Booking {
  public date: Date = new Date(Date.now());
  availableDay: AvailableDay[] = [];

  constructor(private navParams: NavParams, private toastCtrl: ToastController) {
    this.availableDay = navParams.get('availableDay');  
  }

  hours = [];
  time = ["1Hr"];
  availability = false;
  hourSelected;

  selectedHour() {
  }
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'botto'
    });
    toast.present();
  }
}
