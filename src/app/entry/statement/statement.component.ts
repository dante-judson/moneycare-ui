import { Component, OnInit } from '@angular/core';

import { EntryService } from "../entry.service";
import { Entry } from "../entry";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  entries: Entry[] = [];
  total = 0;

  constructor(
    private service: EntryService
  ) { }

  ngOnInit() {
    this.getMonthStatement();
  }


  getMonthStatement() {
    this.service.monthStatement().subscribe(res => {
      this.entries = res;

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
