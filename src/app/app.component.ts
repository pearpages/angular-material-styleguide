import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  template: `
  <mat-sidenav-container class="mat-typography">
    <mat-sidenav
      #sidenav
      mode="side"
      [(opened)]="opened">
      <sty-sidebar (close)="handleClose()"></sty-sidebar>
    </mat-sidenav>
    <mat-sidenav-content>
      <sty-header (menuClicked)="sidenav.toggle()"></sty-header>
      <router-outlet></router-outlet>
      <sty-footer></sty-footer>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened;

  handleClose() {
    this.sidenav.close();
  }
}
