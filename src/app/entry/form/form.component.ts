import { Component, OnInit } from '@angular/core';

import { Entry } from "../entry";
import { EntryService } from "../entry.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  entry = new Entry();
  message: string;
  error: boolean;

  constructor(
    private entryService: EntryService
  ) { }

  ngOnInit() {
    this.entry.type = 'Receita';
  }

  submitForm(form) {
    if (this.entry.description) {
      this.entryService.save(this.entry).subscribe(res => {
        form.reset({ type: 'Receita' });
        this.message = 'Lançamento adicionado com sucesso!';
        this.error = false;
      }, err => {
        this.message = err.message;
        this.error = true;
      });
    } else {
      document.getElementById('modalTrigger').click();
    }

  }

  closeAlert() {
    this.message = '';
  }
}
