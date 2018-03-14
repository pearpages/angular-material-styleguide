import { NgModule } from '@angular/core';

import { MaterialFormModule } from './material-form.module';
import { MaterialNavigationModule } from './material-navigation.module';
import { MaterialLayoutModule } from './material-layout.module';
import { MatIconModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';

const modules = [MaterialFormModule, MaterialLayoutModule, MaterialNavigationModule, MatIconModule, MatButtonModule, MatButtonToggleModule];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
