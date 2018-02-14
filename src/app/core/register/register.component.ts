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
  error: boolean;
  message:string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submitForm(){
    this.loginService.register(this.user).subscribe(res => {
      this.error = false;
      this.message = 'Usuário criado com sucesso!';
    },err => {
      this.error = true;
      this.message = err.error.message;
    })
  }

  validatePass(){
    return this.user.password === this.confirmPass;
  }

  validateEmail(){
    this.loginService.checkEmail(this.user.email).subscribe(res => {
      this.validEmail = res['valid'];
    },err => {
      this.error = true;
      this.message = 'Erro ao conectar com servidor';
    });
  }

  validateUsername(username){
    this.loginService.checkUsername(this.user.username).subscribe(res => {
      this.validUsername = res['valid'];
    },err => {
      this.error = true;
      this.message = 'Erro ao conectar com servidor';
    })
  }

  closeAlert(){
    this.message = null;
  }
}
