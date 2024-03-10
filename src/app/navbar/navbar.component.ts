import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService) 
  {
    _AuthService.currentUserData.subscribe(()=>{
    
      if(_AuthService.currentUserData.getValue()==null){
        this.isLogin=false;

      }
      else{
       this.isLogin=true;
      }


    })

   }
 
  isLogin:boolean=false;

  logout()
  {
    this._AuthService.logout();
  }

  ngOnInit(): void {
  }

}
