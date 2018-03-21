import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-buttons-indicators',
  styles: [`
    .button-row {
      padding: 40px;
    }
  `],
  template: `
  <sty-page title="Buttons and Indicators">

    <sty-expansion [title]="'Button'">
      <sty-basic-buttons></sty-basic-buttons>
    </sty-expansion>

    <sty-expansion [title]="'Button Toggle'">
      <sty-toggle-buttons></sty-toggle-buttons>
    </sty-expansion>

    <sty-expansion [title]="'Chips'">
      <sty-chip-buttons></sty-chip-buttons>
    </sty-expansion>

    <sty-expansion [title]="'Icon'">
      <mat-icon>home</mat-icon>
    </sty-expansion>

    <sty-expansion [title]="'Progress spinner'">
      <ul>
        <li>Determinate</li>
        <li>Indeterminate</li>
      </ul>
      <h4>Indeterminate</h4>
      <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
    </sty-expansion>

    <sty-expansion [title]="'Progress bar'">
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
      </mat-list>

    </sty-expansion>

  </sty-page>
  `
})

export class ButtonsIndicatorsComponent {
  handleClick() {
    alert('Yes, you clicked!');
  }
}
