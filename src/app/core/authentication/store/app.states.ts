import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import * as auth from './reducers/auth.reducer';


export interface AppState{
    authState: auth.State;
    allUsers:User[];
}

export const reducers = {
    auth: auth.authReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');

export const selectAllUsers = (state:AppState) => state.allUsers;

// export const selectAuthUsers = createSelector()


export const selectUsers = createSelector(
    selectAllUsers,
    (allUsers: User[]) => allUsers
  );