import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService {

  constructor() { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    let tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer'+localStorage.getItem('admin-token')
      }
    });
    return next.handle(tokenizedRequest);
  }
}
