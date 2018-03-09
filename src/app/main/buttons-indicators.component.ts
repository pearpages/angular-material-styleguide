import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-buttons-indicators',
  template: `
  <sty-page title="Buttons and Indicators">

    <h3>TOC: Types</h3>
    <ul>
      <li>Basic</li>
      <li>Raised</li>
      <li>Icon</li>
      <li>Fab</li>
      <li>Mini Fab</li>
    </ul>

    <hr>

    <h3>Basic Buttons</h3>
    <div class="button-row">
      <button (click)="handleClick()" mat-button>Basic</button>
      <button (click)="handleClick()" mat-button color="primary">Primary</button>
      <button (click)="handleClick()" mat-button color="accent">Accent</button>
      <button (click)="handleClick()" mat-button color="warn">Warn</button>
      <button (click)="handleClick()" mat-button disabled>Disabled</button>
      <a (click)="handleClick()" mat-button routerLink=".">Link</a>
    </div>

    <h3>Raised Buttons</h3>
    <div class="button-row">
      <button (click)="handleClick()" mat-raised-button>Basic</button>
      <button (click)="handleClick()" mat-raised-button color="primary">Primary</button>
      <button (click)="handleClick()" mat-raised-button color="accent">Accent</button>
      <button (click)="handleClick()" mat-raised-button color="warn">Warn</button>
      <button (click)="handleClick()" mat-raised-button disabled>Disabled</button>
      <a (click)="handleClick()" mat-raised-button routerLink=".">Link</a>
    </div>

    <h3>Icon Buttons</h3>
    <div class="button-row">
      <button (click)="handleClick()" mat-icon-button>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button (click)="handleClick()" mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button (click)="handleClick()" mat-icon-button color="accent">
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button (click)="handleClick()" mat-icon-button color="warn">
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button (click)="handleClick()" mat-icon-button disabled>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
    </div>

    <h3>Fab Buttons</h3>
    <div class="button-row">
      <button (click)="handleClick()" mat-fab>Basic</button>
      <button (click)="handleClick()" mat-fab color="primary">Primary</button>
      <button (click)="handleClick()" mat-fab color="accent">Accent</button>
      <button (click)="handleClick()" mat-fab color="warn">Warn</button>
      <button (click)="handleClick()" mat-fab disabled>Disabled</button>
      <button (click)="handleClick()" mat-fab>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <a (click)="handleClick()" mat-fab routerLink=".">Link</a>
    </div>

    <h3>Mini Fab Buttons</h3>
    <div class="button-row">
      <button (click)="handleClick()" mat-mini-fab>Basic</button>
      <button (click)="handleClick()" mat-mini-fab color="primary">Primary</button>
      <button (click)="handleClick()" mat-mini-fab color="accent">Accent</button>
      <button (click)="handleClick()" mat-mini-fab color="warn">Warn</button>
      <button (click)="handleClick()" mat-mini-fab disabled>Disabled</button>
      <button (click)="handleClick()" mat-mini-fab>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <a (click)="handleClick()" mat-mini-fab routerLink=".">Link</a>
    </div>
  </sty-page>
  `
})

export class ButtonsIndicatorsComponent {
  handleClick() {
    alert('Yes, you clicked!');
  }
}
