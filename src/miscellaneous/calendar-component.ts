import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { AvailableDay } from './../model/availableDay';

@Component({
  selector: 'calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'calendar.html',
  styles: [`
    .disable-cell {
      background-color: white !important;
      color: #cccccc
    }
    .active-cell {
      background-color: #ddffcc !important;
      color: black
    }
  `]
})
export class CalendarComponent implements OnInit {
  @Input() availability: AvailableDay[];
  @Output() clickedDay = new EventEmitter();
  view: string = 'month';


  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  refresh: Subject<any> = new Subject();

  addCssClass: (day: CalendarMonthViewDay) => void;

  cssClass: string = 'disable-cell';
  days_label: Array<string> = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ];

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
    this.addCssClass = (day: CalendarMonthViewDay): void => {
      day.cssClass = this.cssClass;
      if (!day.isPast) {
        this.enableCalendar(day);
      }
    };
  }

  enableCalendar (day: CalendarMonthViewDay) {
    let availability = this.availability;
    let shortDay = (day.date.getMonth() + 1) + "/" + day.date.getDate() + "/" + day.date.getFullYear();
    for (let i = 0; i < availability.length; i++) {
      if (availability[i].day === shortDay) {
        day.cssClass = 'active-cell';
      }
    }
  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[]}): void {
    let available = false;
    let shortDay = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    let availability = this.availability;
    for (let i = 0; i < availability.length; i++) {
      if (availability[i].day === shortDay) {
        available = true;
        this.clickedDay.emit(availability[i]);
      }
    }
    if(!available) {
      this.presentToast("No disponible");
      this.clickedDay.emit(null);
    }
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  //TODO Revisar cual es mas correcto. Tarea para el Galdi
  // ngAfterContentInit() {
  //   console.log( this.availability);
  //  }
}
