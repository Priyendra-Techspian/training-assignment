import { createAction, props } from '@ngrx/store';
import { Song } from 'src/app/shared/models/user.model';

export const loadSongs = createAction(
  '[Song] Load Songs'
);

export const loadSongsSuccess = createAction(
  '[Song] Load Songs Success',
  props<{ data: any }>()
);

export const loadSongsFailure = createAction(
  '[Song] Load Songs Failure',
  props<{ error: any }>()
);

/* ---------------------------- */

export const loadSingleSong = createAction(
  '[Song] Load Individual Song',
  props< {id: string} >()
);

export const loadSingleSongSuccess = createAction(
  '[Song] Load Individual Song Success',
  props<{ data: Song }>()
);

export const loadSingleSongFailure = createAction(
  '[Song] Load  Individual Song Failure',
  props<{ error: Song }>()
);

/* ---------------------------------- */

export const addSong = createAction(
  '[Song] Add Songs',
  props<{ data: Song }>()
);

export const addSongSuccess = createAction(
  '[Song] Add Songs Success',
  props<{ data: Song }>()
);

export const addSongFailure = createAction(
  '[Song] Add Songs Failed',
  props<{ error: any }>()
);
/* ------------------------------ */

export const updateSong = createAction(
  '[Song] Update Songs',
  props<{ data: any }>()
);

export const updateSongSuccess = createAction(
  '[Song] Update Songs Success',
  props<{ data: any }>()
);

export const updateSongFailure = createAction(
  '[Song] Update Songs Failed',
  props<{ error: any }>()
);

/* --------------------------- */

export const deleteSong = createAction(
  '[Song] Delete Songs Success',
  props<{ id: string }>()
);

export const deleteSongSuccess = createAction(
  '[Song] Delete Songs Success'
);

export const deleteSongFailure = createAction(
  '[Song] Delete Songs Failed',
  props<{ error: any }>()
);

