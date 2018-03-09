import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { SidebarComponent } from './sidebar.component';

const components = [SidebarComponent];

@NgModule({
  imports: [SharedModule],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class SidebarModule { }
