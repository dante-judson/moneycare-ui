import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LoginService } from "../core/login.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = this.loginService.getToken();
    if(token){
      request = request.clone({
      setHeaders: {
        'x-access-token': token
      }
    });
    }
    
    return next.handle(request);
  }
}