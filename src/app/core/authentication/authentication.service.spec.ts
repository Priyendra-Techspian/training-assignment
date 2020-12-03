import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/shared/models/user.model';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be login user ', () => {
    let userObj = { email: 'test@gmail.com', password:"1234"};
    service.login(userObj).subscribe((response)=>{
        expect(response).toBe(userObj)
    })
  })

  it('should be register user ', () => {
    let userObj = { fname: "test", lname: "test1", email: 'test@gmail.com', password:"1234", confirmPassword:"1234"};
    service.register(userObj).subscribe((response)=>{
        expect(response).toBe(userObj)
    })
  })

});
