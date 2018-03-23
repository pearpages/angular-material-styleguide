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
      <section-radio></section-radio>
    </sty-expansion>

    <sty-expansion title="Select">
      <section-select></section-select>
    </sty-expansion>

    <sty-expansion title="Slider">
      <section-slider></section-slider>
    </sty-expansion>

    <sty-expansion title="Slider toggle">
      <section-slider-toggle></section-slider-toggle>
    </sty-expansion>

  </sty-page>
  `
})

export class FormsControlComponent {
}
