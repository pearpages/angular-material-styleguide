import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-layout-card',
  styles: [`
    .example-card {
      max-width: 400px;
    }
  `],
  template: `
  <p>While this component can be used alone, it also provides a number of preset styles for common card sections, including:</p>
  <ul>
    <li>mat-card-title</li>
    <li>mat-card-subtitle</li>
    <li>mat-card-content</li>
    <li>mat-card-actions</li>
    <li>mat-card-footer</li>
  </ul>

  <mat-card class="example-card">
    <mat-card-header>
      <div mat-card-avatar class="example-header-image"></div>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Dog Breed</mat-card-subtitle>
    </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
    <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      </p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button>LIKE</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
  </mat-card>
  `
})

export class LayoutCardComponent {}
