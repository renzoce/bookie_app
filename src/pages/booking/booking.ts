import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'calendar',
  templateUrl: 'booking.html'
})

export class Booking {
  public date: Date = new Date(Date.now());

  days_label: Array<string> = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
  ];

  hours = [14, 15, 16, 17];
  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    console.log(date);
  }

}
