import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sty-forms-control',
  template: `
  <sty-page title="Forms Control">

    <sty-expansion title="AutoComplete">
      <section-auto-complete></section-auto-complete>
    </sty-expansion>

    <sty-expansion title="Checkbox">
      <section-checkbox></section-checkbox>
    </sty-expansion>

    <sty-expansion title="Datepicker">
      <section-datepicker></section-datepicker>
    </sty-expansion>

    <sty-expansion title="Form field & Input">
      <section-inputs></section-inputs>
    </sty-expansion>

    <sty-expansion title="Radio button">
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
    </sty-expansion>
    <sty-expansion title="Select">
      <form [formGroup]="select">
        <mat-form-field>
          <mat-select formControlName="select" placeholder="Favorite food">
            <mat-option *ngFor="let food of foods" [value]="food">
              {{ food }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </form>
      <code>
        {{ this.select.value | json }}
      </code>
    </sty-expansion>
    <sty-expansion title="Slider">
      <form [formGroup]="slider">
        <mat-slider formControlName="slider" min="1" max="5" step="0.5" ></mat-slider>
      </form>
      <code>
        {{ this.slider.value | json }}
      </code>
    </sty-expansion>
    <sty-expansion title="Slider toggle">
      <form [formGroup]="sliderToggle">
        <mat-slide-toggle formControlName="sliderToggle"></mat-slide-toggle>
      </form>
      <code>
        {{ this.sliderToggle.value | json }}
      </code>
    </sty-expansion>
  </sty-page>
  `
})

export class FormsControlComponent {
  radios: FormGroup;
  select: FormGroup;
  foods = ['Soup', 'Burger', 'Lobster'];
  slider: FormGroup;
  sliderToggle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForms();
  }

  createForms() {
    this.radios = this.fb.group({
      radios: ['3']
    });
    this.select = this.fb.group({
      select: ['Lobster']
    });
    this.slider = this.fb.group({
      slider: [2]
    });
    this.sliderToggle = this.fb.group({
      sliderToggle: false
    });
  }
}
