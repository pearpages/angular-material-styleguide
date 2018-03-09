import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sty-sidebar',
  template: `
  <mat-nav-list>
    <mat-list-item>
       <a matLine >Form Controls</a>
       <button mat-icon-button>
          <mat-icon>create</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a matLine >Navigation</a>
       <button mat-icon-button>
          <mat-icon>apps</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a matLine >Layout</a>
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
       <a matLine >Popup & Modals</a>
       <button mat-icon-button>
          <mat-icon>present_to_all</mat-icon>
       </button>
    </mat-list-item>
    <mat-list-item>
       <a matLine >Data table</a>
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
