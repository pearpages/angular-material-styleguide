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
      <p>The following input types can be used with matInput:</p>
      <ul>
        <li>date</li>
        <li>datetime-local</li>
        <li>email</li>
        <li>month</li>
        <li>number</li>
        <li>password</li>
        <li>search</li>
        <li>tel</li>
        <li>text</li>
        <li>time</li>
        <li>url</li>
        <li>week</li>
      </ul>
      <form [formGroup]="texts">
        <mat-form-field>
          <input matInput placeholder="Input" formControlName="short">
        </mat-form-field>
        <mat-form-field>
          <textarea matInput placeholder="Textarea" formControlName="long"></textarea>
        </mat-form-field>
      </form>
      <code>
        {{ this.texts.value | json }}
      </code>
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
  texts: FormGroup;
  radios: FormGroup;
  select: FormGroup;
  foods = ['Soup', 'Burger', 'Lobster'];
  slider: FormGroup;
  sliderToggle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForms();
  }

  createForms() {

    this.texts = this.fb.group({
      short: ['Pere'],
      long: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec enim sollicitudin, auctor elit quis, pretium dui. Maecenas luctus, urna sed ullamcorper gravida, nunc massa cursus nunc, et auctor quam est id tortor. Pellentesque eu ante ac orci blandit iaculis. Curabitur interdum porttitor mollis. Donec faucibus felis vitae magna finibus, quis varius nulla lacinia. Donec fringilla, justo eu hendrerit lacinia, dolor mauris auctor nulla, gravida consectetur lacus sapien eget metus. In sem quam, interdum sed consectetur sed, vulputate ac augue. Nunc accumsan justo sed nunc auctor condimentum. Donec tristique varius libero nec placerat. Proin vel diam vitae nisi porttitor interdum. Cras bibendum porttitor diam, at aliquam augue dignissim at. Donec ut mollis nisi. Quisque ornare fermentum odio, non finibus est accumsan et. Cras non risus interdum, gravida ligula quis, maximus neque. Sed vitae erat diam. Suspendisse egestas ipsum tortor, ut bibendum massa imperdiet sit amet.']
    });
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
