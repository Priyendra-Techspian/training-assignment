import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSongs } from 'src/app/core/authentication/store/app.states';
import { Song } from 'src/app/shared/models/user.model';
import { CommonService } from 'src/app/shared/services/common.service';
import * as SongActions from '../store/song.actions'
import { SongState } from '../store/song.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  songsArr:any = [];
  songsList$: Observable<Song[]>;
  
  constructor(
              private commonService:CommonService,
              private store: Store<SongState>,
              ) { }

  ngOnInit(): void {
    this.fetchAllSongs();
  }

  fetchAllSongs(){
    this.store.dispatch(SongActions.loadSongs());
    this.songsList$ = this.store.pipe(select(selectSongs));
    console.log("this.songs $ ::>", this.songsList$);
  }

}
