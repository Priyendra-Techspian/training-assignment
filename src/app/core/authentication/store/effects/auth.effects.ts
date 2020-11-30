import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../authentication.service';
import * as AllAuthActions from '../actions/auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private http: HttpClient,
              private authenticationService:AuthenticationService) {}

  getAllUser$: Observable<Action> = createEffect(() => 
    this.actions$.pipe(
      ofType(AllAuthActions.allUsers),
      mergeMap( action => 
          this.authenticationService.getAllUserDetail().
          pipe(
              map((data:User[]) => {
                return AllAuthActions.allUsersSuccess({ data })
              }),
              catchError((error)=>{
                return of(AllAuthActions.allUsersFailure(error)); 
              })
          )  
      )
      //getAllUserDetail      
    )
  )

  Login$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(AllAuthActions.auths),
    mergeMap(action =>
        //this.authenticationService.login(action.data)
        this.authenticationService.getUserDetail(action.data)
        .pipe(
          map((data: User) => {
            return AllAuthActions.authSuccess({ data });
          }),
          catchError((error) => {
            return of(AllAuthActions.authFailure(error));
          })
        )
    )
  )
);

}
