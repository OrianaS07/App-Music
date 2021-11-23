import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPagesComponent } from './login-pages.component';
import { By } from '@angular/platform-browser';

describe('LoginPagesComponent', () => {
  let component: LoginPagesComponent;
  let fixture: ComponentFixture<LoginPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginPagesComponent
      ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Invalid Forms',()=>{
    const mockCredentials = {
      email: 'correo',
      password:'edfr1'
    };
    const emailFrom = component.formLogin.get('email');
    const passwordFrom = component.formLogin.get('password');

    emailFrom?.setValue(mockCredentials.email);
    passwordFrom?.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toBeTrue();
  });

  it('Valid From', () => {
    const mockCredentials = {
      email: 'test@test.com',
      password:'12345678'
    };
    const emailFrom = component.formLogin.get('email');
    const passwordFrom = component.formLogin.get('password');

    emailFrom?.setValue(mockCredentials.email);
    passwordFrom?.setValue(mockCredentials.password);

    expect(component.formLogin.valid).toBeTrue();
  });

  it('the button should have the word "Iniciar Sesión"', () =>{

    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');
  });
});
