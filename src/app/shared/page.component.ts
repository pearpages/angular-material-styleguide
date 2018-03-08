import { Component, Input } from '@angular/core';

@Component({
  selector: 'sty-page',
  styles: [`
    h2 {
      margin: 64px 0 0 0;
      padding: 28px;
    }
    .sty-page__body {
      padding: 20px;
    }
  `],
  template: `
  <h2 class="primary">{{ title }}</h2>
  <div class="sty-page__body">
    <ng-content></ng-content>
  </div>
  `
})

export class PageComponent {
  @Input() title: string;
}
