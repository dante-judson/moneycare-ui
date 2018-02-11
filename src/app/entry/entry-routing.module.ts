import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from "./form/form.component";
import { StatementComponent } from "./statement/statement.component";

const routes: Routes = [
  { path: 'entry/form', component: FormComponent },
  { path: 'statement', component: StatementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
