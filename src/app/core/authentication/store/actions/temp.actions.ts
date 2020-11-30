import { Action } from '@ngrx/store';

export enum AuthActionTypes{
    LOGIN= '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILED = '[Auth] Login Failed'
}



/* 
export class LogIn implements Action{
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any){}
}

export class LogInSuccess implements Action{
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any){}
}

export class LogInFailed implements Action{
    readonly type = AuthActionTypes.LOGIN_FAILED;
    constructor(public payload: any){}
}

export type AllActions =
  | LogIn
  | LogInSuccess
 */