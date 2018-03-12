import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-sidebar',
  template: `
  <mat-nav-list>
    <mat-list-item>
       <a [routerLink]="['examples', 'forms-control']" matLine >Form Controls</a>
       <button mat-icon-button>
          <mat-icon>create</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a matLine >(Disabled) Navigation</a>
       <button mat-icon-button>
          <mat-icon>apps</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a matLine >(Disabled) Layout</a>
       <button mat-icon-button>
          <mat-icon>view_module</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a [routerLink]="['examples', 'buttons-and-indicators']" matLine >Buttons & Indicators</a>
       <button mat-icon-button>
          <mat-icon>add_box</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a matLine >(Disabled) Popup & Modals</a>
       <button mat-icon-button>
          <mat-icon>present_to_all</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a matLine >(Disabled) Data table</a>
       <button mat-icon-button>
          <mat-icon>border_left</mat-icon>
       </button>
    </mat-list-item>
</mat-nav-list>
  `
})

export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
