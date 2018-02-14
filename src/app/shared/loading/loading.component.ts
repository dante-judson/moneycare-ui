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

    let element = document.getElementById('loadingPage');
    let elementClass = document.getElementsByClassName('modal-backdrop')[0];
    if (element) {
      element.remove();
    }
    if (elementClass) {
      elementClass.remove();
    }
  }
}
