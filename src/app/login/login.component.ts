import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error:string="";
  constructor(private _AuthService:AuthService,private _Router:Router) { }
    loginForm:FormGroup=new FormGroup({
    
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern( /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)]),
    
  })
  submit_form(login:FormGroup){
    this._AuthService.signIn(login.value).subscribe((response)=>{
     if(login.valid){
     if(response.message ==="success")
      {
      localStorage.setItem("currentUser",response.token);
      this ._AuthService.saveCurrentUserData();
      this._Router.navigate(['/home']);
      
      }
      else{
        this.error=response.message;
      }
     } 
    })
  }

  ngOnInit(): void {
  }

}
