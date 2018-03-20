import { NgModule } from '@angular/core';

import { MaterialButtonsModule } from './material-buttons.module';
import { MaterialFormModule } from './material-form.module';
import { MaterialNavigationModule } from './material-navigation.module';
import { MaterialLayoutModule } from './material-layout.module';
import { MaterialPopupsModalsModule } from './material-popups-modals.module';
import { MaterialDataTableModule } from './material-datatable.module';

const modules = [MaterialFormModule, MaterialDataTableModule, MaterialLayoutModule, MaterialNavigationModule, MaterialButtonsModule, MaterialPopupsModalsModule];
@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
