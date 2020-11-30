import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export const allUsers = createAction(
  '[Auth] Load Users',
);

export const allUsersSuccess = createAction(
  '[Auth] Load Users Success',
 props<{ data:User[] }>()
);

export const allUsersFailure = createAction(
  '[Auth] Load Users Failure',
  props<{ error: any }>()
);

export const auths = createAction(
  '[Auth] Login',
  props<{ data:any }>()
);

export const authSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: User }>()
);

export const authFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);
