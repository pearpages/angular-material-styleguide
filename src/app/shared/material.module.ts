import { NgModule } from '@angular/core';

import { MaterialFormModule } from './material-form.module';
import { MaterialNavigationModule } from './material-navigation.module';
import { MaterialLayoutModule } from './material-layout.module';
import { MatIconModule, MatButtonModule, MatTabsModule, MatButtonToggleModule } from '@angular/material';

const modules = [MaterialFormModule, MaterialLayoutModule, MaterialNavigationModule, MatIconModule, MatButtonModule, MatTabsModule, MatButtonToggleModule];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
