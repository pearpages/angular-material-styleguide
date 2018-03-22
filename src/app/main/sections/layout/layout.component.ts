import { Component } from '@angular/core';

@Component({
  selector: 'sty-layout',
  template: `
  <sty-page title="Layout">

    <sty-expansion [title]="'Card'">
      <sty-layout-card></sty-layout-card>
    </sty-expansion>

    <sty-expansion [title]="'Divider'">
      <sty-layout-divider></sty-layout-divider>
    </sty-expansion>

    <sty-expansion [title]="'Expansion Panel'">
      <sty-layout-expansion></sty-layout-expansion>
    </sty-expansion>

    <sty-expansion [title]="'Grid list'">
      <sty-layout-grid></sty-layout-grid>
    </sty-expansion>

    <sty-expansion [title]="'List'">
      <sty-layout-list></sty-layout-list>
    </sty-expansion>

    <sty-expansion [title]="'Stepper'">
      <sty-layout-stepper></sty-layout-stepper>
    </sty-expansion>

    <sty-expansion [title]="'Tabs'">
      <sty-layout-tabs></sty-layout-tabs>
    </sty-expansion>

  </sty-page>
  `
})

export class LayoutComponent {}
