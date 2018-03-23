import { Component } from '@angular/core';

@Component({
  selector: 'sty-footer',
  styles: [`
    footer {
      padding: 12px;
      color: white;
      font-size: 14px;
    }
    footer * {
      color: white;
    }
  `],
  template: `
  <footer class="primary">
    v1.0.0 | <a [routerLink]="['']">home</a> | <a [routerLink]="['resources']">resources</a> | <a href="https://pearpages.com">pearpages.com</a>
  </footer>
  `
})

export class FooterComponent {}
