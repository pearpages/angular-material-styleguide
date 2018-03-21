import { Component } from '@angular/core';

@Component({
  selector: 'sty-basic-buttons',
  template: `
  <p>Angular Material buttons are native **button** or **a** elements enhanced with Material Design styling and ink ripples.</p>

  <mat-tab-group>
    <mat-tab label="Basic">
      <div class="button-row">
        <button (click)="handleClick()" mat-button>Basic</button>
        <button (click)="handleClick()" mat-button color="primary">Primary</button>
        <button (click)="handleClick()" mat-button color="accent">Accent</button>
        <button (click)="handleClick()" mat-button color="warn">Warn</button>
        <button (click)="handleClick()" mat-button disabled>Disabled</button>
        <a (click)="handleClick()" mat-button routerLink=".">Link</a>
      </div>
    </mat-tab>
    <mat-tab label="Raised">
      <div class="button-row">
        <button (click)="handleClick()" mat-raised-button>Basic</button>
        <button (click)="handleClick()" mat-raised-button color="primary">Primary</button>
        <button (click)="handleClick()" mat-raised-button color="accent">Accent</button>
        <button (click)="handleClick()" mat-raised-button color="warn">Warn</button>
        <button (click)="handleClick()" mat-raised-button disabled>Disabled</button>
        <a (click)="handleClick()" mat-raised-button routerLink=".">Link</a>
      </div>
    </mat-tab>
    <mat-tab label="Icon">
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
    </mat-tab>
    <mat-tab label="Fab">
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
    </mat-tab>
    <mat-tab label="Mini Fab">
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
    </mat-tab>
  </mat-tab-group>
  `
})

export class BasicButtonsComponent {
  handleClick() {
    alert('Yes, you clicked!');
  }
}
