import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, ],
      declarations: [ LoginComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
});
