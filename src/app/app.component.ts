import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _admin:AdminService, private _router:Router) { }

  public isLoggedIn(): boolean {
    return this._admin.checkToken();
   }
 
   public signout(){
     window.alert('hello')
     localStorage.removeItem('jwt_token');
     this._router.navigate(['sign-in']);
   }
}
