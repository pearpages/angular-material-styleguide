import { Component } from '@angular/core';

@Component({
  selector: 'sty-chip-buttons',
  template: `
  <p>If you want to use colors the chip must be selected=true</p>
  <mat-chip-list>
    <mat-chip>One fish</mat-chip>
    <mat-chip>Two fish</mat-chip>
    <mat-chip color="primary" selected="true">Primary fish</mat-chip>
    <mat-chip color="accent" selected="true">Accent fish</mat-chip>
  </mat-chip-list>
  `
})

export class ChipButtonsComponent {
}
