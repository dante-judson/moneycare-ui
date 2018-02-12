import { Component, OnInit, Input } from '@angular/core';

import { Entry } from "../entry";

@Component({
  selector: 'app-report-data',
  templateUrl: './report-data.component.html',
  styleUrls: ['./report-data.component.css']
})
export class ReportDataComponent implements OnInit {

  @Input() reportData: Entry [];

  constructor() { }

  ngOnInit() {
  }

}
