import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { PageComponent } from './page.component';
import { ExpansionComponent } from './expansion.component';

const components = [HeaderComponent, FooterComponent, PageComponent, ExpansionComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CommonModule, MaterialModule, RouterModule, ...components]
})
export class SharedModule { }
