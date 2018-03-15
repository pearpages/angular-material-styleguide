import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sty-header',
  styles: [`
    .sty-header {
      position: fixed;
      box-shadow: 0px 1px 10px 0px #222;
    }
  `],
  template: `
    <mat-toolbar class="sty-header" color="primary">
      <a mat-button (click)="menuClicked.emit(true)"><mat-icon>menu</mat-icon></a>
      <span [routerLink]="['']">CMS</span>
    </mat-toolbar>
    `
})

export class HeaderComponent {
  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter();
}
