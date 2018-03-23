import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'section-slider-toggle',
  template: `
  <form [formGroup]="sliderToggle">
    <mat-slide-toggle formControlName="sliderToggle"></mat-slide-toggle>
  </form>
  <code>
    {{ this.sliderToggle.value | json }}
  </code>
  `
})

export class SectionSliderToggleComponent {
  sliderToggle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sliderToggle = this.fb.group({
      sliderToggle: false
    });
  }
}
