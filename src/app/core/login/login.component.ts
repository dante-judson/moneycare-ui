import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submitForm(){
    this.loginService.login(this.user).subscribe(res => {
      console.log(res);
    });
  }

}
