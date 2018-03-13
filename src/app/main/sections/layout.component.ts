import { Component } from '@angular/core';

@Component({
  selector: 'sty-layout',
  template: `
  <sty-page title="Layout">

    <sty-expansion [title]="'Card'">

    </sty-expansion>

    <sty-expansion [title]="'Divider'">

    </sty-expansion>

    <sty-expansion [title]="'Expansion Panel'">

    </sty-expansion>

    <sty-expansion [title]="'Grid list'">

    </sty-expansion>

    <sty-expansion [title]="'List'">

    </sty-expansion>

    <sty-expansion [title]="'Stepper'">

    </sty-expansion>

    <sty-expansion [title]="'Tabs'">

    </sty-expansion>

  </sty-page>
  `
})

export class LayoutComponent {
}
