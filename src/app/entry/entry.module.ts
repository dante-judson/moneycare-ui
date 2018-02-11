import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { EntryRoutingModule } from './entry-routing.module';
import { FormComponent } from './form/form.component';
import { EntryService } from "./entry.service";
import { StatementComponent } from './statement/statement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    EntryRoutingModule
  ],
  declarations: [FormComponent, StatementComponent],
  providers:[EntryService]
})
export class EntryModule { }
