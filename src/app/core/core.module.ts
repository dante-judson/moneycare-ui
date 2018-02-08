import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from "./login.service";
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    CoreRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [LoginService]
})
export class CoreModule { }
