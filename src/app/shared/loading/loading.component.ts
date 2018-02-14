import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('modalTrigger').click();
  }

  ngOnDestroy() {

    // let element = document.getElementById('loadingPage');
    let element = document.getElementsByClassName('modal-open')[0];
    let elementClass = document.getElementsByClassName('modal-backdrop')[0];
    if (element) {
      element.classList.remove('modal-open');
    }
    if (elementClass) {
      document.getElementsByClassName('modal-open');
      
      elementClass.remove();
    }
  }
}
