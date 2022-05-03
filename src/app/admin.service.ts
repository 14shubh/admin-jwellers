import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  SigninUrlApi="https://artifical.herokuapp.com/admin/signin";

  constructor(private _http:HttpClient) { }

  public login(email: string, password: string):Observable<any> {
    return this._http.post<any>(this.SigninUrlApi,{email: email, password: password});
  }


  public checkToken(){
    return !!localStorage.getItem('admin_token');
  }
}
