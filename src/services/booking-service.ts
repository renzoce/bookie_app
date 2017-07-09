import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Booking } from './../model/booking';

@Injectable()
export class BookingService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private roomsUrl = 'http://54.191.139.3:3000/bookings';

  constructor(private http: Http) { }

  saveBooking(booking: Booking): Promise<Booking> {
    return this.http.post(this.roomsUrl, JSON.stringify({booking: booking}), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Booking)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
