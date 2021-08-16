import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class DataService {
  readonly BASE_URL = 'https://easyeatsodero.herokuapp.com';
  HttpClient: any;

  constructor(private http: HttpClient) {}


  apiCallCuisines() {
    return this.http.get(this.BASE_URL +'/api/v1/cuisines');
  }


  apiCallShops() {
    return this.http.get(this.BASE_URL +'/api/v1/shops');
  }

  apiCallwaiters() {
    return this.http.get(this.BASE_URL + '/api/v1/waiters');
  }

  apiCallMenus() {
    return this.http.get( this.BASE_URL +'/api/v1/menus');
  }



}
