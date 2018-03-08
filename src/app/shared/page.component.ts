import { Component, Input } from '@angular/core';

@Component({
  selector: 'sty-page',
  styles: [`
    h2 {
      margin: 64px 0 0 0;
      padding: 28px;
    }
  `],
  template: `
  <h2 class="primary">{{ title }}</h2>
  <ng-content></ng-content>
  `
})

export class PageComponent {
  @Input() title: string;
}
