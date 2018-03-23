import { Component } from '@angular/core';

@Component({
  selector: 'sty-toggle-buttons',
  template: `
  <h4>Single Selection</h4>

  <mat-button-toggle-group #group="matButtonToggleGroup">
    <mat-button-toggle value="left">
      <mat-icon>format_align_left</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="center">
      <mat-icon>format_align_center</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="right">
      <mat-icon>format_align_right</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="justify" disabled>
      <mat-icon>format_align_justify</mat-icon>
    </mat-button-toggle>
  </mat-button-toggle-group>

  <h4>Multiple Selection</h4>

  <mat-button-toggle-group multiple>
    <mat-button-toggle value="left">
      <mat-icon>format_align_left</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="center">
      <mat-icon>format_align_center</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="right">
      <mat-icon>format_align_right</mat-icon>
    </mat-button-toggle>
    <mat-button-toggle value="justify" disabled>
      <mat-icon>format_align_justify</mat-icon>
    </mat-button-toggle>
  </mat-button-toggle-group>
  `
})

export class ToggleButtonsComponent {

}
