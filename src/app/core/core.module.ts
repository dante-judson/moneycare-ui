import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from "./login.service";
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardService } from "./dashboard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,

    CoreRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, DashboardComponent, NavbarComponent],
  exports: [NavbarComponent],
  providers: [LoginService, DashboardService]
})
export class CoreModule { }
