import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-indicators',
  styles: [`
    .button-row {
      padding: 40px;
    }
  `],
  template: `
  <sty-page title="Buttons and Indicators">

    <sty-expansion [title]="'Chips'">
      <sty-chip-buttons></sty-chip-buttons>
    </sty-expansion>

    <sty-expansion [title]="'Icon'">
      <mat-icon>home</mat-icon>
    </sty-expansion>

    <sty-expansion [title]="'Progress spinner'">
      <sty-indicator-spinner></sty-indicator-spinner>
    </sty-expansion>

    <sty-expansion [title]="'Progress bar'">
      <sty-indicator-progress></sty-indicator-progress>
    </sty-expansion>

  </sty-page>
  `
})

export class IndicatorsComponent {
  handleClick() {
    alert('Yes, you clicked!');
  }
}
