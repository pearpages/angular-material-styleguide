import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-header',
  template: `
    <mat-toolbar color="primary">
      <span>Application Title</span>

      <!-- This fills the remaining space of the current row -->
      <span class="example-fill-remaining-space"></span>

      <span>Right Aligned Text</span>
    </mat-toolbar>
    `
})

export class HeaderComponent {}
