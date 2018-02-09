import { Component, OnInit } from '@angular/core';

import { Entry } from "../entry";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  entry = new Entry();

  constructor() { }

  ngOnInit() {
  }

}
