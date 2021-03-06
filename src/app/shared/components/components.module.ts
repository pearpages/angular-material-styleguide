import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'app/shared/material';
import { PageComponent } from './page.component';
import { ExpansionComponent } from './expansion.component';
import { ExternalLinksDirective } from './external-links.directive';

const components = [ExpansionComponent, PageComponent, ExternalLinksDirective];

@NgModule({
  imports: [MaterialModule, RouterModule],
  exports: components,
  declarations: components,
  providers: [],
})
export class StyComponentsModule { }
