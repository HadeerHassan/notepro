import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { }
  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl("",[Validators.required,Validators.minLength(8)]),
    last_name:new FormControl ("",[Validators.required,Validators.minLength(8)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern( /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)]),
    age:new FormControl("",[Validators.required,Validators.pattern(/^[1-9][0-9]?$/)])
  })
  error:string="";
 submit_form(register:FormGroup){
   this._AuthService.signUp(register.value).subscribe((response)=>{
    if(register.valid){
    if(response.message ==="success")
     {
     this._Router.navigate(['/login']);
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
