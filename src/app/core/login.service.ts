import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tokenNotExpired } from "angular2-jwt";

import { enviroment } from "../../env";
import { User } from "./user";

@Injectable()
export class LoginService {

  private serviceUrl = enviroment.serverURL;

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post<any>(`${this.serviceUrl}/login`,user);
  }

  register(user: User){
    return this.http.post(`${this.serviceUrl}/register`,user);
  }

  checkEmail(email:string){
    return this.http.get(`${this.serviceUrl}/user/email/${email}`);
  }

  checkUsername(username:string){
    return this.http.get(`${this.serviceUrl}/user/username/${username}`);
  }

  storeToken(token){
    localStorage.setItem('money-care-token',token);
  }

  getToken(){
    return localStorage.getItem('money-care-token');
  }

  isLoggedIn(){
    return tokenNotExpired('money-care-token');
  }

  logoff(){
    localStorage.clear();
  }
}
