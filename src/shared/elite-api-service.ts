import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EliteApi {

  private baseUrl = "https://elite-schedule-23ccf.firebaseio.com/"
  constructor(public http: Http) {}
}
