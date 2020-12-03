import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { selectedSongDetail } from 'src/app/core/authentication/store/app.states';
import { Song } from 'src/app/shared/models/user.model';
import { CommonService } from 'src/app/shared/services/common.service';
import * as SongActions from '../store/song.actions'
import { SongState } from '../store/song.reducer';

@Component({
  selector: 'app-add-update-song',
  templateUrl: './add-update-song.component.html',
  styleUrls: ['./add-update-song.component.scss']
})
export class AddUpdateSongComponent implements OnInit {

  dataUpdateFlag: boolean = false;
  songForm:FormGroup;
  song:Song;
  songId:string;
  songDetail$: any;
  updateSongObj: Update<SongState>;
  currentUrl: string;
  
  constructor(
              public formbuilder: FormBuilder,
              private store: Store<any>,
              public commonService : CommonService,
              public router: Router,
              private route: ActivatedRoute
  ) {
    
    this.currentUrl = this.router.url; //.split("/")[this.router.url.split("/").length - 1];
   }

  ngOnInit(): void {
    this.songForm = this.formbuilder.group({
      name:['', Validators.required],
      // imageUrl: ['', Validators.required],
      songUrl: ['', Validators.required],
   });

   if(this.currentUrl.split("/")[2] === "edit-song"){
    this.songId = this.currentUrl.split("/")[3];
    this.editSongDetail(this.songId);
   }
   
  }

  
  addSong(){
    this.song =this.songForm.value;
    this.store.dispatch(SongActions.addSong({data: this.song}));
    this.songForm.reset();
    this.router.navigate(["app/song-management"]);
  }

  editSongDetail(id:any){
    this.songId = id;
    this.dataUpdateFlag = true;
    this.store.pipe(select(selectedSongDetail)).subscribe((data)=>{
      this.songDetail$ = data[0];//Object.assign(new Song(), data[0]);
      this.songForm.patchValue(this.songDetail$);
    })
  }

  updateSong(){
      this.updateSongObj = Object.assign({ id: this.songId, changes:this.songForm.value })//this.songForm.value;
      this.store.dispatch(SongActions.updateSong({data : this.updateSongObj}));
      this.songForm.reset();
  }

}
