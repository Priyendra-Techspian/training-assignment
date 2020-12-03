import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Song } from 'src/app/shared/models/user.model';
import { CommonService } from 'src/app/shared/services/common.service';
import * as AllSongActions from './song.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class SongEffects {

  fetchAllSongs$: Observable<Action> = createEffect(() => 
  this.actions$.pipe(
    ofType(AllSongActions.loadSongs),
    mergeMap( action => 
        this.commonService.fetchSongs().
        pipe(
            map((data:Song[]) => {
              return AllSongActions.loadSongsSuccess({ data })
            }),
            catchError((error)=>{
              return of(AllSongActions.loadSongsFailure(error)); 
            })
        )  
    )
  )
)

addSong$: Observable<Action> = createEffect(() => 
this.actions$.pipe(
  ofType(AllSongActions.addSong),
  mergeMap( action => 
      this.commonService.createNewSongs(action.data).
      pipe(
          map((data:Song) => {
            alert("Song added successfully..!")
            return AllSongActions.addSongSuccess({ data })
          }),
          catchError((error)=>{
            return of(AllSongActions.addSongFailure(error)); 
          })
      )  
  )
)
)

/* Fetch Single Detail */
fetchSong$: Observable<Action> = createEffect(() => 
this.actions$.pipe(
  ofType(AllSongActions.loadSingleSong),
  mergeMap( (action:any) => 
      this.commonService.getSongDetail(action.id).
      pipe(
          map((data:Song) => {
            this.router.navigate([`${'app/edit-song/'}${action.id}`]);
            // alert("Song detail fetch successfully..!")
            return AllSongActions.loadSingleSongSuccess({ data })
          }),
          catchError((error)=>{
            return of(AllSongActions.loadSingleSongFailure(error)); 
          })
      )  
  )
)
)

/* Update detail */
updateSong$: Observable<Action> = createEffect(() => 
this.actions$.pipe(
  ofType(AllSongActions.updateSong),
  mergeMap( (action:any) => 
      this.commonService.updateSongDetails(action.data.changes, action.data.id).
      pipe(
          map((data:Song) => {
            alert("Song updated successfully..!");
            this.router.navigate(["app/song-management"]);
            return AllSongActions.updateSongSuccess({ data })
          }),
          catchError((error)=>{
            return of(AllSongActions.updateSongFailure(error)); 
          })
      )  
    )
  )
)

/* Delete detail */
deleteSong$: Observable<Action> = createEffect(() => 
this.actions$.pipe(
  ofType(AllSongActions.deleteSong),
  mergeMap( (action:any) => 
      this.commonService.deleteSongDetail(action.id).
      pipe(
          map(() => {
            alert("Song deleted successfully..!");
            return AllSongActions.deleteSongSuccess()
          }),
          catchError((error)=>{
            return of(AllSongActions.deleteSongFailure(error)); 
          })
      )  
    )
  )
)


  constructor(private actions$: Actions, private commonService: CommonService, private router: Router) {}

}
