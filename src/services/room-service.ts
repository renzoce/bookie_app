import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Room } from './../model/room';
import { AvailableDay } from './../model/availableDay';

@Injectable()
export class RoomService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private roomsUrl = 'http://54.191.139.3:3000/rooms';
  private availableDayUrl = 'http://54.191.139.3:3000/rehearsalRooms/availability';

  constructor(private http: Http) { }

  getRooms(): Promise<Room[]> {
    return this.http.get(this.roomsUrl)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }
  getAvailability(): Promise<AvailableDay[]> {
    return this.http.get(this.availableDayUrl)
      .toPromise()
      .then(response => response.json() as AvailableDay[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
