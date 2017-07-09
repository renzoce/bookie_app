import { NavParams } from 'ionic-angular';
import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { AvailableDay } from './../../model/availableDay';
import { Booking } from './../../model/booking';
import { BookingService } from './../../services/booking-service';

@Component({
  selector: 'calendar',
  templateUrl: 'booking.html'
})

export class BookingPage {
  public date: Date = new Date(Date.now());
  availableDay: AvailableDay[] = [];

  constructor(private navParams: NavParams, private bookingService: BookingService) {
    this.availableDay = navParams.get('availableDay');
  }

  hours = [];
  duration = ["1 Hr"];
  hourAvailability = false;
  durationAvailability = false;
  booking: Booking = new Booking();
  daySelected: AvailableDay;
  hourSelected;
  durationSelected;


  selectedHour() {
    this.duration = ["1 Hr"];
    let duration;
    for (let i = 0; i < this.daySelected.availableHours.length; i++) {
      if (this.daySelected.availableHours[i].hour + this.daySelected.availableHours[i].duration > this.hourSelected) {
        duration = this.daySelected.availableHours[i].hour + this.daySelected.availableHours[i].duration - this.hourSelected;
      }
    }
    for (let i = 0; i < duration && i < 4; i++) {
      if (i == 0) {
        this.duration = ["1 Hr"];
      } else {
        this.duration.push(i + 1 + " Hrs");
      }
    }
    this.durationAvailability = true;
  }

  handleDayClicked(daySelected) {
    if (daySelected) {
    this.daySelected = daySelected;
    this.hours=[];
    this.hourSelected = -1;
      for (let i = 0; i < daySelected.availableHours.length; i++) {
        for (let x = 0; x < daySelected.availableHours[i].duration; x++) {
          this.hours.push(daySelected.availableHours[i].hour + x);
        }
      }
      this.hourAvailability = true;
    } else {
      this.hourAvailability = false;
      this.durationAvailability = false;
    }
  }


  sendMockBooking() {
    this.booking.duration = 120;
    this.booking.startDate = "2017-06-26";
    this.booking.startTime = 900;
    this.booking.invoiceAmount = 120;
    this.booking.description = "MockTest";
    this.saveBooking(this.booking);
  }

  saveBooking(booking: Booking): void {
    this.bookingService.saveBooking(booking);
  }

}
