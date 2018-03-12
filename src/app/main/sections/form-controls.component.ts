import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sty-forms-control',
  template: `
  <sty-page title="Forms Control">
    <sty-expansion title="AutoComplete">
      <form [formGroup]="autoComplete">
        <mat-form-field>
          <input type="text" matInput formControlName="name">
        </mat-form-field>
      </form>
    </sty-expansion>
    <sty-expansion title="Checkbox">
      <form [formGroup]="checkbox">
        <mat-checkbox formControlName="alive">Check me!</mat-checkbox>
      </form>
      <code>
        {{ this.checkbox.get('alive').value }}
      </code>
    </sty-expansion>
    <sty-expansion title="Datepicker">
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
    </sty-expansion>
    <sty-expansion title="Form field">
      not yet ready
    </sty-expansion>
    <sty-expansion title="Input">
      not yet ready
    </sty-expansion>
    <sty-expansion title="Radio button">
      not yet ready
    </sty-expansion>
    <sty-expansion title="Select">
      not yet ready
    </sty-expansion>
    <sty-expansion title="Slider">
      not yet ready
    </sty-expansion>
    <sty-expansion title="Slider toggle">
      not yet ready
    </sty-expansion>
  </sty-page>
  `
})

export class FormsControlComponent {
  autoComplete: FormGroup;
  checkbox: FormGroup;
  datepicker: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForms();
  }

  createForms() {
    this.autoComplete = this.fb.group({
      name: ['']
    });
    this.checkbox = this.fb.group({
      alive: [true]
    });
    this.datepicker = this.fb.group({
      datepicker: [(new Date()).toISOString()]
    })
  }
}
