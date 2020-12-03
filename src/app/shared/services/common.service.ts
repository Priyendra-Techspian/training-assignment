import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; 
import { Song } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  fetchSongs(): Observable<any>{
    return this.http.get(environment.baseUrl + '/songs');
  }

  createNewSongs(data:Song): Observable<any>{
    return this.http.post(environment.baseUrl + '/songs', data);
  }

  getSongDetail(songId:any): Observable<any>{
    return this.http.get(environment.baseUrl + '/songs?id=' + songId);
  }

  updateSongDetails(data:Song, id:string): Observable<any>{
    return this.http.put(environment.baseUrl + '/songs/' + id, data);
  }

  deleteSongDetail(id:string): Observable<any>{
    return this.http.delete(environment.baseUrl + '/songs/' + id);
  }
}
