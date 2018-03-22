import { Component } from '@angular/core';

@Component({
  selector: 'sty-layout-list',
  template: `
  <mat-selection-list #shoes>
    <mat-list-option *ngFor="let shoe of typesOfShoes">
      {{shoe}}
    </mat-list-option>
  </mat-selection-list>

  <p>
    Options selected: {{shoes.selectedOptions.selected.length}}
  </p>
  `
})

export class LayoutListComponent {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
