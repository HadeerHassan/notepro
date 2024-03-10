import { Observable,BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { 

    if(localStorage.getItem("currentUser"))
    {
      this.saveCurrentUserData();
    }
  }

  currentUserData:any=new BehaviorSubject(null);
  signUp(data:any):Observable<any>
  {
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",data);
  }


  signIn(data:any):Observable<any>
  {
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",data);
  }

  saveCurrentUserData()
  {
    let encodedToken:any=localStorage.getItem("currentUser");
    let decodedToken=jwtDecode(encodedToken);
    this.currentUserData.next(decodedToken);

  }
  logout()
  {
   
    localStorage.removeItem("currentUser");
    this._Router.navigate(["/login"]);
    this.currentUserData.next(null);

  }
}
