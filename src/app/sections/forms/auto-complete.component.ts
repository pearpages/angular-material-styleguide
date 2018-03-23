import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'section-auto-complete',
  template: `
  <form [formGroup]="autoComplete">
    <mat-form-field>
      <input type="text" matInput formControlName="name">
    </mat-form-field>
  </form>
  `
})

export class SectionActoCompleteComponent {
  autoComplete: FormGroup;

  constructor(private fb: FormBuilder) {
    this.autoComplete = this.fb.group({
      name: ['']
    });
  }
}
