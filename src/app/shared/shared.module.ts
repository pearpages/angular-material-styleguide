import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './header.component';

const components = [HeaderComponent];

@NgModule({
  declarations: components,
  imports: [MaterialModule],
  exports: [MaterialModule, ...components]
})
export class SharedModule { }
