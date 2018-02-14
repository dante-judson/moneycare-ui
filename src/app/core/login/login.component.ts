import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  loading = false;
  errorMessage: string;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.loading = true;
    this.loginService.login(this.user).subscribe(res => {
      this.loginService.storeToken(res.token);
      this.router.navigate(['dashboard']);
      this.loading = false;
    }, err => {
      this.loading = false;
      this.errorMessage = err.error.message;
    });
  }

}
