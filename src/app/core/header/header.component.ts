import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from '../authentication/store/app.states';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticatedFlag:any;
  themeModel:string = 'dark';
  constructor(public router: Router) {
   
   }

  ngOnInit(): void {
  this.isAuthenticatedFlag = this.getStorageData()
    if(this.isAuthenticatedFlag == null || this.isAuthenticatedFlag == ''){
      this.isAuthenticatedFlag = false;
      this.setStorageData('false');
    }

    this.changeTheme('dark');
    
  }

  logOut(){
    this.setStorageData('false');
    alert("Logout successfully..!");
    this.isAuthenticatedFlag = this.getStorageData();
    this.router.navigate(['/app/home']);
  }

  getStorageData(){
   return localStorage.getItem('loggedIn');
  }

  setStorageData(value:string){
    localStorage.setItem('loggedIn', value);
  }

  changeTheme(themeVal:string){
    this.themeModel = themeVal;
    if(this.themeModel == 'dark') {
      document.documentElement.style.setProperty('--activeLink-color', '#c4172c')
      document.documentElement.style.setProperty('--section-bgcolor', '#a8d3ffd6');
      document.documentElement.style.setProperty('--songName-color', '#000000');
      
    }else{
      document.documentElement.style.setProperty('--activeLink-color', 'cornflowerblue');
      document.documentElement.style.setProperty('--section-bgcolor', '#ffffff');
      document.documentElement.style.setProperty('--songName-color', '#c4172c');
    }
      

  }
}
