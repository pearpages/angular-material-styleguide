import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'section-select',
  template: `
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
  `
})

export class SectionSelectComponent {
  foods = ['Soup', 'Burger', 'Lobster'];
  select: FormGroup;

  constructor(private fb: FormBuilder) {
    this.select = this.fb.group({
      select: ['Lobster']
    });
  }

}
