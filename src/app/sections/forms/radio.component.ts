import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'section-radio',
  template: `
  <form [formGroup]="radios">
    <mat-radio-group formControlName="radios">
      <mat-radio-button value="1">Option 1</mat-radio-button>
      <mat-radio-button value="2">Option 2</mat-radio-button>
      <mat-radio-button value="3">Option 3</mat-radio-button>
      <mat-radio-button value="4">Option 4</mat-radio-button>
    </mat-radio-group>
  </form>
  <code>
    {{ this.radios.value | json }}
  </code>
  `
})

export class SectionRadioComponent {
  radios: FormGroup;

  constructor(private fb: FormBuilder) {
    this.radios = this.fb.group({
      radios: ['3']
    });
  }

}
