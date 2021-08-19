import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly BASE_URL = 'https://easyeatsodero.herokuapp.com';

  constructor(private http: HttpClient) { }


  apiCallShops() {
    return this.http.get(this.BASE_URL +'/api/v1/shops');
  }


  apiCallMenus() {
    return this.http.get(this.BASE_URL +'/api/v1/menus');
  }

  apiCallCusines() {
    return this.http.get(this.BASE_URL +'/api/v1/cuisines');
  }


}
