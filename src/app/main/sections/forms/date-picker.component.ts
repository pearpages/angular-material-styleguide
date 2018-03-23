import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'section-datepicker',
  template: `
  <form [formGroup]="datepicker">
    <mat-form-field>
      <input matInput formControlName="datepicker" [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    </form>
    <code>
    {{ this.datepicker.get('datepicker').value }}
    </code>
  `
})

export class SectionDatepickerComponent {
  datepicker: FormGroup;

  constructor(private fb: FormBuilder) {
    this.datepicker = this.fb.group({
      datepicker: [(new Date()).toISOString()]
    });
  }
}
