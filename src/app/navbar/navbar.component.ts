import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _admin:AdminService, private _router:Router) { }

  public isLoggedIn(): boolean {
    return this._admin.checkToken();
   }
 
   public signout(){
     localStorage.removeItem('admin_token');
     this._router.navigate(['sign-in']);
   }

  ngOnInit(): void {
  }

}
