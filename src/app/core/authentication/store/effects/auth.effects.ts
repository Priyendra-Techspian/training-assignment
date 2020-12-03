import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../authentication.service';
import * as AllAuthActions from '../actions/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private http: HttpClient,
              private router: Router,
              private authenticationService:AuthenticationService) {}

  Login$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(AllAuthActions.auths),
    mergeMap(action =>

        this.authenticationService.login(action.data)
        
        .pipe(
          map((data) => {
           /*  this.getAllUser$.subscribe((response:any)=>{
              console.log(" response ::::>>>", response );
            }) */
            // let finalArr = [] = data.filter((x:any)=> x.email == action.data.email)
            // if(finalArr.length > 0){
            //   return AllAuthActions.authSuccess({ finalArr[0] });              
            // } 
            // this.authenticationService.login(action.data)._
            if(data.length > 0){
              alert("login successfully")
              this.router.navigate(['/app/home']);
              localStorage.setItem('loggedIn', 'true');
              return AllAuthActions.authSuccess({ data });
            }else{
              alert("login failed");
              localStorage.setItem('loggedIn', 'false');
              return AllAuthActions.authFailure( data );
              
            }

          }),
          catchError((error) => {
            return of(AllAuthActions.authFailure(error));
          })
        )
    )
  )
);

}
