import { TestBed } from '@angular/core/testing';
import { Song } from '../models/user.model';

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be fetch all songs ', () => {
    let songObj = { id:1, name: "Song name", songUrl:"https://static.statusqueen.in/ringtones/krishna_flute_2014-53.mp3"};
    service.fetchSongs().subscribe((response)=>{
        expect(response).toBe(songObj)
    })
  })

  it('should be fetch song detail ', () => {
    let songObj = { id:1, name: "instrumental", songUrl:"https://static.statusqueen.in/ringtones/krishna_flute_2014-53.mp3"};
    service.getSongDetail(songObj.id).subscribe((response)=>{
        expect(response).toBe(songObj)
    })
  })

  it('should be add song detail ', () => {
    let songObj:Song = { name: "flute song", songUrl:"https://static.statusqueen.in/ringtones/krishna_flute_2014-53.mp3"};
    service.createNewSongs(songObj).subscribe((response)=>{
        expect(response).toBe(songObj)
    })
  })

  it('should be add update detail ', () => {
    let songObj:Song = { name: "flute song", songUrl:"https://static.statusqueen.in/ringtones/krishna_flute_2014-53.mp3"};
    service.updateSongDetails(songObj, '2').subscribe((response)=>{
        expect(response).toBe({ id:2, name: "flute song", songUrl:"https://static.statusqueen.in/ringtones/krishna_flute_2014-53.mp3"})
    })
  })

  it('should be add delete detail ', () => {
    service.deleteSongDetail('2').subscribe((response)=>{
        expect(response).toBe({})
    })
  })
});
