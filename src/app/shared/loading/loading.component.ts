import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() loading;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.loading) {
      document.getElementById('modalTrigger').click();
    }
  }

  ngOnDestroy() {
    let element = document.getElementsByClassName('modal-backdrop')[0];
    element.classList.remove('modal-backdrop');
  }

}
