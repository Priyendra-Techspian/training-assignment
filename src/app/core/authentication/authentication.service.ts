import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from '../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  set userDetails(data:any){
    
  }

  login(data: User) : Observable<any>{
    return this.http.get(environment.baseUrl + '/users?email='+ data.email + '&password=' + data.password);
  }

  getUserDetail(id:any) : Observable<any>{
    return this.http.get(environment.baseUrl + '/users/'+ id);
  }

  getAllUserDetail() : Observable<any>{
    return this.http.get(environment.baseUrl + '/users');
  }


  register(data: User): Observable<any>{
    return this.http.post(environment.baseUrl + '/users', data);
  }
}
