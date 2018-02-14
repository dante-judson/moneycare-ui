import { Component, OnInit } from '@angular/core';

import { ReportService } from "../report.service";
import { Entry } from "../entry";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  entries: Entry[] = [];
  total = 0;
  loading = false;

  constructor(
    private service: ReportService
  ) { }

  ngOnInit() {
    this.getMonthStatement();
  }


  getMonthStatement() {
    this.loading = true;
    this.service.monthStatement().subscribe(res => {
      this.entries = res;
      this.loading = false;

      this.entries.forEach(entry => {
        if(entry.type == 'Receita'){
          this.total += entry.value;
        } else {
          this.total -= entry.value;
        }
      })
    });
  }

}
