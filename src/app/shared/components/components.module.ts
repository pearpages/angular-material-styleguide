import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'app/shared/material';
import { PageComponent } from './page.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ExpansionComponent } from './expansion.component';

const components = [ExpansionComponent, FooterComponent, HeaderComponent, PageComponent];

@NgModule({
  imports: [MaterialModule, RouterModule],
  exports: components,
  declarations: components,
  providers: [],
})
export class StyComponentsModule { }
