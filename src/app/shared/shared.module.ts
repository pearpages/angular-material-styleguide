import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { PageComponent } from './page.component';

const components = [HeaderComponent, FooterComponent, PageComponent];

@NgModule({
  declarations: components,
  imports: [MaterialModule, RouterModule],
  exports: [MaterialModule, RouterModule, ...components]
})
export class SharedModule { }
