import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/hcs/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string):Observable<any>{
    return this.http.post<any>( AUTH_API+'login', {
       username: username, password: password },httpOptions);
  }

  
  register(email:string,firstName:string,lastName:string,contactno:bigint,
    password:string):Observable<any>{
    return this.http.post(AUTH_API + 'register', {
      username: email,
      firstName:firstName,
      lastName:lastName,
      contactNo:contactno,
      password: password
    }, httpOptions);
  }
}
