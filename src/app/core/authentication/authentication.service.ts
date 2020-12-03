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

  login(data: any) : Observable<any>{
    return this.http.get(environment.baseUrl + '/users?email='+ data.email + '&password=' + data.password);
  }

  register(data: User): Observable<any>{
    return this.http.post(environment.baseUrl + '/users', data);
  }
}
