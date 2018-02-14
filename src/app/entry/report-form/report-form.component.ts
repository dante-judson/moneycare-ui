import { Component, OnInit } from '@angular/core';

import { Entry } from "../entry";
import { ReportFilter } from "../report-filter";
import { ReportService } from "../report.service";

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  loading = false;
  reportData: Entry[];
  filter: ReportFilter = new ReportFilter();

  constructor(
    private service: ReportService
  ) { }

  ngOnInit() {
    this.defaultFormValues();
  }

  defaultFormValues() {
    let date = new Date();

    let month = `0${date.getMonth() + 1}`.slice(-2);

    let day = `0${date.getDate()}`.slice(-2);

    this.filter.initialDate = `${date.getFullYear()}-${month}-01`;
    this.filter.finalDate = `${date.getFullYear()}-${month}-${day}`;

    this.filter.type = '';
    this.filter.description = '';
  }

  submitForm() {
    this.loading = true;
    this.reportData = [];

    if (this.filter.initialDate == '') {
      this.filter.initialDate = undefined;
    }

    if (this.filter.finalDate == '') {
      this.filter.finalDate = undefined;
    }

    if (this.filter.description == '') {
      this.filter.description= undefined;
    }

    if (this.filter.type == '') {
      this.filter.type= undefined;
    }

    this.service.report(this.filter).subscribe(res => {
      this.loading = false
      this.reportData = res;
    });
  }

}
