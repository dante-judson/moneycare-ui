import { Component } from '@angular/core';
import { LoginService } from './core/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loginService: LoginService){ }

  isLoggedIn(){
    return this.loginService.isLoggedIn();
  }
}
