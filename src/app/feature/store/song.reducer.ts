import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Song } from 'src/app/shared/models/user.model';
import * as SongActions from './song.actions'

export const songFeatureKey = 'song';

export interface SongState extends EntityState<Song>{
  songDetails?: Song|null;
  error?: null;
}

export const adapter: EntityAdapter<Song> = createEntityAdapter<Song>();

export const initialState: SongState = adapter.getInitialState({
  songDetails: null,
  error: null
})

 const songReducer = createReducer(
  initialState,

  on(SongActions.loadSongsSuccess, (state, action:any)=> { return adapter.setAll(action.data, state)  }),
  on(SongActions.loadSongsFailure, (state, action:any)=> { return { ...state, error: action.error }  }),

  on(SongActions.addSongSuccess, (state, action:any)=> { return adapter.addOne(action.data, state)  }),
  on(SongActions.addSongFailure, (state, action:any)=> { return { ...state, error: action.error}  }),
  
  on(SongActions.loadSingleSongSuccess, (state, action:any)=> { return { ...state, songDetails:action.data }  }),
  on(SongActions.loadSingleSongFailure, (state, action:any)=> { return { ...state, error: action.error}  }),

  on(SongActions.updateSongSuccess, (state, action:any)=> { return adapter.updateOne(action.data, state) }),
  on(SongActions.updateSongFailure, (state, action:any)=> { return { ...state, error: action.error}  }),

  on(SongActions.deleteSongSuccess, (state, action:any)=> { return adapter.removeOne(action.data, state) }),
  on(SongActions.deleteSongFailure, (state, action:any)=> { return { ...state, error: action.error}  }),

);

 
export function reducer(state: SongState | undefined, action: Action) {
  return songReducer(state, action);
}

// get the selectors
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
 