import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AvailableDay } from './../model/availableDay';
import { RehearsalRoom } from './../model/rehearsalRoom';

@Injectable()
export class RehearsalRoomService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://54.191.139.3:3000/rehearsalRooms';

  constructor(private http: Http) { }

  getAvailability(id: number): Promise<AvailableDay[]> {
    const url = `${this.baseUrl}/${id}/availability`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as AvailableDay[])
      .catch(this.handleError);
  }
  getRehearsalRoom(): Promise<RehearsalRoom[]> {
    const url = `${this.baseUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as RehearsalRoom[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
