import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Room } from './../model/room';

@Injectable()
export class RoomService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private roomsUrl = 'http://localhost:3000/rooms';

  constructor(private http: Http) { }

  getRooms(): Promise<Room[]> {
    return this.http.get(this.roomsUrl)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
