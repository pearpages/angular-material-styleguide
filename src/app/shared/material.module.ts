import { NgModule } from '@angular/core';

import { MaterialFormModule } from './material-form.module';
import { MaterialLayoutModule } from './material-layout.module';
import { MatSidenavModule, MatIconModule, MatMenuModule, MatListModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule } from '@angular/material';

const modules = [MaterialFormModule, MaterialLayoutModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
