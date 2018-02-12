import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from "./form/form.component";
import { StatementComponent } from "./statement/statement.component";
import { ReportFormComponent } from "./report-form/report-form.component";
import { AuthGuard } from "../guards/authGuard";
import { GoalsComponent } from "./goals/goals.component";

const routes: Routes = [
  { path: 'entry/form', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'statement', component: StatementComponent, canActivate: [AuthGuard] },
  { path: 'report/form', component: ReportFormComponent, canActivate: [AuthGuard] },
  { path: 'goals', component: GoalsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
