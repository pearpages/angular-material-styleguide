import { NgModule } from '@angular/core';

import { MaterialButtonsModule } from './material-buttons.module';
import { MaterialFormModule } from './material-form.module';
import { MaterialNavigationModule } from './material-navigation.module';
import { MaterialLayoutModule } from './material-layout.module';

const modules = [MaterialFormModule, MaterialLayoutModule, MaterialNavigationModule, MaterialButtonsModule];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
