import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import * as AllAuthActions from '../actions/auth.actions'

export const authFeatureKey = 'auth';

export interface State {
  isAuthenticated?: boolean;
  userDetails?: User | null;
  message?: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  userDetails: null,
  message: null
};


export const authReducer = createReducer(
  initialState,

  on(AllAuthActions.allUsers, (state, action:any)=>{ return { ...state, userDetails: action.data }}),

  on(AllAuthActions.auths, (state, action)=>{ return { ...state, userDetails: action.data }}),

  on(AllAuthActions.authSuccess, (state, action)=>{ return { ...state, isAuthenticated:true, userDetails: action.data }}),

  on(AllAuthActions.authFailure, (state, action)=>{ return { ...state, message:action.error, userDetails: null }})
);

