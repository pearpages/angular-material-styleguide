import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';

const components = [SidebarComponent, FooterComponent, HeaderComponent];

@NgModule({
  imports: [SharedModule],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class StyNavigatonModule { }
