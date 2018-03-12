import { Component, Input } from '@angular/core';

@Component({
  selector: 'sty-expansion',
  template: `
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      {{ title }}
    </mat-expansion-panel-header>

    <ng-content></ng-content>
  </mat-expansion-panel>
  `
})

export class ExpansionComponent {
  @Input() title: string;
}
