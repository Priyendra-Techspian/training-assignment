import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as Songs from '../store/song.reducer';
import * as auths from '../../core/authentication/store/reducers/auth.reducer';


export interface AssignmentState {
    auth:auths.State;
    song:Songs.SongState;
}

export const reducers: ActionReducerMap<AssignmentState> = {
  auth:auths.authReducer,
  song: Songs.reducer
};  

export const selectAuthState = createFeatureSelector<AssignmentState>('auth');


export const getSongFeatureState =
   createFeatureSelector
     <AssignmentState>( Songs.songFeatureKey );


// export const selectSongs = createSelector(getSongFeatureState, Songs.selectAll);

// export const metaReducers: MetaReducer<songState>[] = !environment.production ? [] : [];
