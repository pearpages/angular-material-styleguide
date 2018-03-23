import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'section-inputs',
  template: `
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
  `
})

export class SectionInputsComponent {
  texts: FormGroup;

  constructor(private fb: FormBuilder) {
    this.texts = this.fb.group({
      short: ['Pere'],
      long: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec enim sollicitudin, auctor elit quis, pretium dui. Maecenas luctus, urna sed ullamcorper gravida, nunc massa cursus nunc, et auctor quam est id tortor. Pellentesque eu ante ac orci blandit iaculis. Curabitur interdum porttitor mollis. Donec faucibus felis vitae magna finibus, quis varius nulla lacinia. Donec fringilla, justo eu hendrerit lacinia, dolor mauris auctor nulla, gravida consectetur lacus sapien eget metus. In sem quam, interdum sed consectetur sed, vulputate ac augue. Nunc accumsan justo sed nunc auctor condimentum. Donec tristique varius libero nec placerat. Proin vel diam vitae nisi porttitor interdum. Cras bibendum porttitor diam, at aliquam augue dignissim at. Donec ut mollis nisi. Quisque ornare fermentum odio, non finibus est accumsan et. Cras non risus interdum, gravida ligula quis, maximus neque. Sed vitae erat diam. Suspendisse egestas ipsum tortor, ut bibendum massa imperdiet sit amet.']
    });
  }

}
