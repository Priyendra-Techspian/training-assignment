import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { AppState, selectAuthState, selectUsers } from 'src/app/core/authentication/store/app.states';
import { User } from 'src/app/shared/models/user.model';
import { LoginModule } from './login.module';
import * as AllAuthActions from '../../core/authentication/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registrationForm:FormGroup;
  isLogin: boolean = true;
  user: User;

  getState$:Observable<any>;
  userDetails$: Observable<any[]>;

  constructor(public formbuilder: FormBuilder, 
              public authService:AuthenticationService, 
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
      mobile: ['', Validators.required]
   })

   this.getState$.subscribe((state) => {
    console.log("state ::::>>>>", state)
  });

  this.getUsers();
  }

  getUsers(){
  
    this.userDetails$.subscribe((data)=>{
      console.log(" this.userDetails =====>", data);
    })

    
  }

  login(){
   console.log( "Login", this.loginForm.value);
   this.store.dispatch(AllAuthActions.auths({ data: 1}))
  }

  registerUser(){
     this.user = this.registrationForm.value;
    console.log( "register", this.user );
    this.authService.register(this.user).subscribe(
      (response)=>{
        console.log(" Registered Successfully", response)
      })
   }
}
