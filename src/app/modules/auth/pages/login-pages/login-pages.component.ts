import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  errorSeccion: boolean = false;

  constructor(private authSvc: AuthService,
    private cookie: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void {
    const {email, password} = this.formLogin.value;
    this.authSvc.sendCredentials(email,password).subscribe(
      responseOk =>{
        console.log('seccion correcta');
        const { tokenSession, data} = responseOk;
        this.cookie.set('token', tokenSession,environment.tokenDays, '/');
        this.router.navigate(['/','tracks'])
      },
      error =>{
        console.log('error');
        this.errorSeccion = true;
      }
    )
  }

}
