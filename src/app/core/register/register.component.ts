import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  confirmPass: string;
  validUsername = false;
  validEmail = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submitForm(){
    this.loginService.register(this.user).subscribe(res => {
      console.log(res);
    })
  }

  validatePass(){
    return this.user.password === this.confirmPass;
  }

  validateEmail(){
    this.loginService.checkEmail(this.user.email).subscribe(res => {
      this.validEmail = res['valid'];
      console.log(this.validEmail);
      
    });
  }

  validateUsername(username){
    console.log(username);
    
    this.loginService.checkUsername(this.user.username).subscribe(res => {
      this.validUsername = res['valid'];
    })
  }
}
