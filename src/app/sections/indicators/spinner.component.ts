import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-indicator-spinner',
  template: `
  <ul>
    <li>Determinate</li>
    <li>Indeterminate</li>
  </ul>
  <h4>Indeterminate</h4>
  <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
  `
})

export class IndicatorSpinnerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
