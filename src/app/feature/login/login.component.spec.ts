import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticationService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      declarations: [ LoginComponent ],
      providers: [AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    authService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login form should submit', ()=>{
    component.login();
    expect(component.loginForm.valid).toBeTruthy();
  })
  
  it('login form should be invalid', ()=>{
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.invalid).toBeTruthy()
  })
  
  it('login form should be valid', ()=>{
    component.loginForm.controls['email'].setValue('test@gmail.com');
    component.loginForm.controls['password'].setValue('1234');
    expect(component.loginForm.valid).toBeTruthy()
  })
  
  it('registration form should submit', ()=>{
    component.registerUser();
    expect(component.registrationForm.valid).toBeTruthy();
  })


  it('registration form should be invalid', ()=>{
    component.registrationForm.controls['fname'].setValue('');
    component.registrationForm.controls['lname'].setValue('');
    component.registrationForm.controls['email'].setValue('');
    component.registrationForm.controls['password'].setValue('');
    component.registrationForm.controls['confirmPassword'].setValue('');
    expect(component.registrationForm.invalid).toBeTruthy()
  })

  it('registration form should be valid', ()=>{
    component.registrationForm.controls['fname'].setValue('test');
    component.registrationForm.controls['lname'].setValue('test');
    component.registrationForm.controls['email'].setValue('test@gmail.com');
    component.registrationForm.controls['password'].setValue('1234');
    component.registrationForm.controls['confirmPassword'].setValue('1234');
    expect(component.registrationForm.valid).toBeTruthy()
  })

  it('register user api call', ()=>{
    let userObj = { fname: "test", lname: "test1", email: 'test@gmail.com', password:"1234", confirmPassword:"1234"};;
    const spy = spyOn(authService, 'register').and.returnValue(of(userObj));
    component.registerUser();
    expect(component.isLogin).toBeFalsy();
    expect(component.registrationForm.reset()).toBeTruthy();
  })
});
