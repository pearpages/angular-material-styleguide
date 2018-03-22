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

  </sty-page>
  `
})

export class ButtonsComponent {
  handleClick() {
    alert('Yes, you clicked!');
  }
}
