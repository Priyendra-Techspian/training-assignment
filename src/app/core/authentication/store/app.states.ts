import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, songFeatureKey, SongState } from 'src/app/feature/store/song.reducer';
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

export const selectSongState = createFeatureSelector<SongState>(
    songFeatureKey
);


export const selectAllUsers = (state:AppState) => state.allUsers;

export const selectSongs = createSelector(selectSongState, selectAll);

export const selectedSongDetail = createSelector(selectSongState, (state: SongState) => state.songDetails);

// export const selectAuthUsers = createSelector()


export const selectUsers = createSelector(
    selectAllUsers,
    (allUsers) => { return allUsers}
    
  );