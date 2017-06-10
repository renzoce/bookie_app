import { NavParams } from 'ionic-angular';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { AlertController } from 'ionic-angular';
import { AvailableDay } from './../../model/availableDay';

@Component({
  selector: 'calendar',
  templateUrl: 'booking.html'
})

export class Booking {
  public date: Date = new Date(Date.now());

  constructor(private navParams: NavParams, private alertCtrl: AlertController) {
    let availableDay: AvailableDay[] = [];
    availableDay = navParams.get('availableDay');
    console.log(availableDay);
  }

  days_label: Array<string> = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ];

  hours = [];
  time = ["1Hr"];
  availability = false;
  hourSelected;

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    //hours = getHoursAvailablesByDay (date);
    //HARDCODE --------------------------------------
    console.log(date);
    let dateSelected = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    switch (dateSelected) {
      case dateSelected = "2017/6/14": {
        this.hours = [10, 11, 12, 13];
        break;
      }
      case dateSelected = "2017/6/15": {
        this.hours = [14, 15, 16, 17];
        break;
      }
      case dateSelected = "2017/6/16": {
        this.hours = [18, 19, 20, 21];
        break;
      }
      default: {
        this.hours = [];
        this.showAlert('No disponible! :(', 'Lamentablemente el dia seleccionado no tiene reservas posibles', ['OK'])
        break;
      }
    }
    //------------------------------------------

    if (this.hours && this.hours.length) {
      this.availability = true;
    } else {
      this.availability = false;
    }

  }
  selectedHour() {
  }
  //This logic will be in a Component!
  showAlert(titleAlert, subtitleAlert, buttonsAlert) {
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: subtitleAlert,
      buttons: buttonsAlert
    });
    alert.present();
  }
}
