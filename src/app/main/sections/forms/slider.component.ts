import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'section-slider',
  template: `
  <form [formGroup]="slider">
    <mat-slider formControlName="slider" min="1" max="5" step="0.5" ></mat-slider>
  </form>
  <code>
    {{ this.slider.value | json }}
  </code>
  `
})

export class SectionSliderComponent {
  slider: FormGroup;

  constructor(private fb: FormBuilder) {
    this.slider = this.fb.group({
      slider: [2]
    });
  }
}
