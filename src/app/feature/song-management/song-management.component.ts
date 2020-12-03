import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedSongDetail, selectSongs } from 'src/app/core/authentication/store/app.states';
import { Song } from 'src/app/shared/models/user.model';
import { CommonService } from 'src/app/shared/services/common.service';
// import { songState } from '../reducers';
import * as SongActions from '../store/song.actions'
import { SongState } from '../store/song.reducer';

@Component({
  selector: 'app-song-management',
  templateUrl: './song-management.component.html',
  styleUrls: ['./song-management.component.scss']
})
export class SongManagementComponent implements OnInit {

  songForm:FormGroup;
  songFormFlag:boolean = false;
  song:Song;

  songDetail$: any;//Observable<Song>;
  songsList$: Observable<Song[]>;
  dataUpdateFlag: boolean;
  songId:string;
  updateSongObj: Update<SongState>;

  constructor(public formbuilder: FormBuilder,
              private store: Store<any>,
              public commonService : CommonService,
              public router: Router) { }

  ngOnInit(): void {
    this.songForm = this.formbuilder.group({
      name:['', Validators.required],
      imageUrl: ['', Validators.required],
      songUrl: ['', Validators.required],
      
   });

  
   this.fetchAllSongs();
  }

  navigatetoAddSong(){
    // this.songFormFlag = true;
    // this.dataUpdateFlag = false;
    this.router.navigate([`${'app/add-song/'}`]);
  }

  fetchAllSongs(){
    this.store.dispatch(SongActions.loadSongs());
    this.songsList$ = this.store.pipe(select(selectSongs));
  }

  editSongDetail(id:any){
    this.songId = id;
    this.store.dispatch(SongActions.loadSingleSong({id}));
  }
  
  deleteSong(id:string){
     this.store.dispatch(SongActions.deleteSong({id}));
     this.fetchAllSongs();
  }
}
