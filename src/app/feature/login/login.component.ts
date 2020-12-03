import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { AppState, selectAuthState, selectUsers } from 'src/app/core/authentication/store/app.states';
import { User } from 'src/app/shared/models/user.model';
import { LoginModule } from './login.module';
import * as AllAuthActions from '../../core/authentication/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkPasswordFlag:boolean;
  loginForm: FormGroup;
  registrationForm:FormGroup;
  isLogin: boolean = true;
  user: User;

  getState$:Observable<any>;
  userDetails$: Observable<any[]>;
  getAllUser$: Observable<any[]>;
  currentAuthState:any = {};

  constructor(public formbuilder: FormBuilder, 
              public authService:AuthenticationService, 
              public router:Router,
              private store: Store<AppState>) {
                this.getState$ = this.store.select(selectAuthState)

                this.store.dispatch(AllAuthActions.allUsers())
                this.userDetails$ = this.store.select(selectUsers);
              }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
       email:['', Validators.required],
       password: ['', Validators.required]
    });

    this.registrationForm = this.formbuilder.group({
      fname:['', Validators.required],
      lname:['', Validators.required],
      email:['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required ],
      
   })

   this.getState$.subscribe((state) => {
    console.log("state ::::>>>>", state)
    this.currentAuthState = state;
  });

  // this.getUsers();
    localStorage.setItem('loggedIn', 'false');
  }

/*   getUsers(){
    this.userDetails$.subscribe((allUsers)=>{
      console.log(" this.userDetails =====>", allUsers);
    })
  } */

  login(){
   console.log( "Login", this.loginForm.value);
  /*  if(this.loginForm.controls['email'].value != null && this.loginForm.controls['password'].value != null){

   } */
   this.store.dispatch(AllAuthActions.auths({ data: this.loginForm.value}))
    // console.log("this.currentAuthState.auth.isAuthenticated ::", this.currentAuthState.auth.isAuthenticated);
    
   /* if(this.currentAuthState.auth.isAuthenticated){
    this.router.navigate(['/app/home']);
   }  */ 

  }

  registerUser(){
    // this.router.navigate(['/app/home']);
     this.user = this.registrationForm.value;
    console.log( "register", this.user );
    this.authService.register(this.user).subscribe(
      (response)=>{
        console.log(" Registered Successfully", response);
        alert("Registered user successfully..!")
        this.isLogin = true;
        this.registrationForm.reset();
      })
   }

   checkPassword(){
     if(this.registrationForm.controls["password"].value === this.registrationForm.controls["confirmPassword"].value){
      this.checkPasswordFlag = false;
     }else{
       this.checkPasswordFlag = true;
     }
   }
}
