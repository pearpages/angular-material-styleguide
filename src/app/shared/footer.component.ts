import { Component } from '@angular/core';

@Component({
  selector: 'sty-footer',
  styles: [`
    footer {
      padding: 12px;
      color: white;
      font-size: 14px;
      margin-top: 40px;
    }
    footer * {
      color: white;
    }
  `],
  template: `
  <footer class="primary">
    <a [routerLink]="['']">home</a> | <a [routerLink]="['resources']">resources</a>
  </footer>
  `
})

export class FooterComponent {}
