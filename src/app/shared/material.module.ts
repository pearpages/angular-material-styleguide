import { NgModule } from '@angular/core';

import { MaterialFormModule } from './material-form.module';
import { MatSidenavModule, MatIconModule, MatMenuModule, MatListModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule } from '@angular/material';

const modules = [MaterialFormModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
