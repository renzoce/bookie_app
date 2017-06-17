import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
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
      background-color: green !important;
      color: black
    }
  `]
})
export class CalendarComponent implements OnInit {
  @Input() availability: AvailableDay[];
  view: string = 'month';

  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  refresh: Subject<any> = new Subject();

  addCssClass: (day: CalendarMonthViewDay) => void;

  cssClass: string = 'disable-cell';
  days_label: Array<string> = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ];

  constructor() {
    this.addCssClass = (day: CalendarMonthViewDay): void => {
      day.cssClass = this.cssClass;
    };
  }


  ngOnInit() {  console.log( this.availability); }

//TODO Revisar cual es mas correcto. Tarea para el Galdi
  // ngAfterContentInit() {
  //   console.log( this.availability);
  //  }
  refreshView(): void {

    this.cssClass = this.cssClass === 'disable-cell' ? 'active-cell' : 'disable-cell';
    this.refresh.next();
  }
}
