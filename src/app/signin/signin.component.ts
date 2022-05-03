import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string='';
  password: string='';

  constructor(private _admin:AdminService, private _router:Router) { }

  
  public signin(){
    
    this._admin.login(this.email,this.password).subscribe((data) => {

      if(data.status){
        localStorage.setItem('admin_token',data.token);
        // localStorage.setItem('UserLoginId',data.result._id);
         this._router.navigate(['dashboard']);
      }else{
        console.log("not found")
      }
    },err=>{
      if(err instanceof HttpErrorResponse){
          if(err.status==500)
            window.alert("Internal Server Error");
      }
    })
  }


  ngOnInit(): void {
  }

}
