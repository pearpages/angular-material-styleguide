import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sty-sidebar',
  styles: [`
    .sty-sidebar__close {
      text-align: right;
    }
    .sty-sidebar__close-icon {
      cursor: pointer;
      padding: 10px;
    }
    .sty-sidebar__close-icon:hover {
      color: #ccc;
    }
  `],
  template: `
  <div class="sty-sidebar__close">
    <mat-icon class="sty-sidebar__close-icon" (click)="close.emit(true)">clear</mat-icon>
  </div>
  <mat-nav-list>
    <mat-list-item>
       <a [routerLink]="['examples', 'forms-control']" matLine >Form Controls</a>
       <button mat-icon-button>
          <mat-icon>create</mat-icon>
       </button>
    </mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>
       <a matLine >(Disabled) Navigation</a>
       <button mat-icon-button>
          <mat-icon>apps</mat-icon>
       </button>
    </mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>
       <a matLine [routerLink]="['examples', 'layout']">Layout</a>
       <button mat-icon-button>
          <mat-icon>view_module</mat-icon>
       </button>
    </mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>
       <a [routerLink]="['examples', 'buttons-and-indicators']" matLine >Buttons & Indicators</a>
       <button mat-icon-button>
          <mat-icon>add_box</mat-icon>
       </button>
    </mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>
       <a [routerLink]="['examples', 'popups-modals']" matLine >Popup & Modals</a>
       <button mat-icon-button>
          <mat-icon>present_to_all</mat-icon>
       </button>
    </mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>
       <a matLine [routerLink]="['examples', 'data-table']">Data table</a>
       <button mat-icon-button>
          <mat-icon>border_left</mat-icon>
       </button>
    </mat-list-item>
  </mat-nav-list>
  `
})

export class SidebarComponent implements OnInit, Output {
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }
}
