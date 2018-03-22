import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { SharedModule } from '../../../shared';

@NgModule({
  imports: [SharedModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
  providers: [],
})
export class LayoutModule { }
