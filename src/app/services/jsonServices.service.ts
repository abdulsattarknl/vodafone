import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Notification } from '../shared/notification';

@Injectable()
export class JsonService {
  constructor(private http: Http) {
  }
  getNotification(): Observable<Notification[]> {
    return this.http.get('./app/data/notification.json')
      .map(res => res.json().data);
  }

}
