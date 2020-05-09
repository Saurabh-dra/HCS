import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8090/hcs/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'home', { responseType: 'text' });
  }

  getConsumerBoard(): Observable<any> {
    return this.http.get(API_URL + 'consumer', { responseType: 'text' });
  }

  getFacilitatorBoard(): Observable<any> {
    return this.http.get(API_URL + 'facilitator', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}