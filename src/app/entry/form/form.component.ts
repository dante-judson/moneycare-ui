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
  loading: boolean;

  constructor(
    private entryService: EntryService
  ) { }

  ngOnInit() {
    this.entry.type = 'Receita';
    this.entry.category = 'Não Informado'
  }

  submitForm(form) {
    if (this.entry.description) {
     this.saveEntry(form);
    } else {
      document.getElementById('modalTrigger').click();
    }

  }

  saveEntry(form){
    this.loading = true;
    this.entryService.save(this.entry).subscribe(res => {
      this.loading = false;
      form.reset({ type: 'Receita' });
      this.message = 'Lançamento adicionado com sucesso!';
      this.error = false;
    }, err => {
      this.message = err.message;
      this.error = true;
      this.loading = false;      
    });
    document.getElementById('closeModal').click();
  }

  closeAlert() {
    this.message = '';
  }

  closeModal(){
    this.loading = false;
  }
}
