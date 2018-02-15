import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { AuthGuard } from "../guards/authGuard";
import { NotAuthGuard } from "../guards/notAuthGuard";

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
