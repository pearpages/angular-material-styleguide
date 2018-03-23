import { Component } from '@angular/core';

@Component({
  selector: 'st-resources',
  template: `
    <sty-page [title]="'Resources'">
      <ul>
      	<li>
      		<h2>
      			<a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a>
      		</h2>
      	</li>
      	<li>
      		<h2>
      			<a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a>
      		</h2>
      	</li>
      	<li>
      		<h2>
      			<a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a>
      		</h2>
      	</li>
      </ul>
    </sty-page>
    `
})

export class ResourcesComponent {

}