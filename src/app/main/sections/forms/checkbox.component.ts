import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'section-checkbox',
  template: `
  <form [formGroup]="checkbox">
    <mat-checkbox formControlName="alive">Check me!</mat-checkbox>
  </form>
  <code>
    {{ this.checkbox.get('alive').value }}
  </code>
  `
})

export class SectionCheckboxComponent {
  checkbox: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForms();
  }

  createForms() {
    this.checkbox = this.fb.group({
      alive: [true]
    });
  }

}
