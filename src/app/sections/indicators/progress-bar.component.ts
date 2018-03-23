import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-indicator-progress',
  template: `
  <ul>
    <li>Determinate</li>
    <li>Indeterminate</li>
    <li>Buffer</li>
    <li>Query</li>
  </ul>
  <mat-list>
    <mat-list-item>
      <h4 matLine>Determinate</h4>
      <mat-progress-bar matLine mode="determinate" value="40"></mat-progress-bar>
      <mat-divider></mat-divider>
    </mat-list-item>
    <mat-list-item>
      <h4 matLine>Indeterminate</h4>
      <mat-progress-bar matLine mode="indeterminate"></mat-progress-bar>
      <mat-divider></mat-divider>
    </mat-list-item>
    <mat-list-item>
      <h4 matLine>Buffer</h4>
      <mat-progress-bar matLine mode="buffer"></mat-progress-bar>
      <mat-divider></mat-divider>
    </mat-list-item>
    <mat-list-item>
      <h4 matLine>Query</h4>
      <mat-progress-bar matLine mode="query"></mat-progress-bar>
    </mat-list-item>
  </mat-list>`
})

export class IndicatorProgressBarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
