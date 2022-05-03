import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _admin:AdminService, private _router:Router){}

  canActivate(): boolean{
    if(this._admin.checkToken()){
      return true;
    }else{
      this._router.navigate(['sign-in']);
      return false;
    }
  }
  
}
