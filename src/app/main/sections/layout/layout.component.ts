import { Component } from '@angular/core';

@Component({
  selector: 'sty-layout',
  styles: [`
    .example-card {
      max-width: 400px;
    }
  `],
  template: `
  <sty-page title="Layout">

    <sty-expansion [title]="'Card'">
      <p>While this component can be used alone, it also provides a number of preset styles for common card sections, including:</p>
      <ul>
        <li>mat-card-title</li>
        <li>mat-card-subtitle</li>
        <li>mat-card-content</li>
        <li>mat-card-actions</li>
        <li>mat-card-footer</li>
      </ul>

      <mat-card class="example-card">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
          <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <mat-card-content>
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    </sty-expansion>

    <sty-expansion [title]="'Divider'">
      <mat-list>
        <mat-list-item>Item 1</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>Item 2</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>Item 3</mat-list-item>
      </mat-list>
    </sty-expansion>

    <sty-expansion [title]="'Expansion Panel'">
      <mat-card>
        <mat-card-title>Examples</mat-card-title>
        <mat-card-content>
          <p>To see examples of the <strong>mat-expansion-panel</strong> look at the <strong>sty-expansion</strong> component and all over the styleguide app.</p>
        </mat-card-content>
      </mat-card>
    </sty-expansion>

    <sty-expansion [title]="'Grid list'">
      <mat-grid-list cols="4" rowHeight="100px">
        <mat-grid-tile
            *ngFor="let tile of tiles"
            [colspan]="tile.cols"
            [rowspan]="tile.rows"
            [style.background]="tile.color">
          {{tile.text}}
        </mat-grid-tile>
      </mat-grid-list>
    </sty-expansion>

    <sty-expansion [title]="'List'">
      <mat-selection-list #shoes>
        <mat-list-option *ngFor="let shoe of typesOfShoes">
          {{shoe}}
        </mat-list-option>
      </mat-selection-list>

      <p>
        Options selected: {{shoes.selectedOptions.selected.length}}
      </p>
    </sty-expansion>

    <sty-expansion [title]="'Stepper'">

    </sty-expansion>

    <sty-expansion [title]="'Tabs'">

    </sty-expansion>

  </sty-page>
  `
})

export class LayoutComponent {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
