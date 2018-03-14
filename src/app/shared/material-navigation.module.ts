import { NgModule } from '@angular/core';

import { MatSidenavModule, MatMenuModule, MatToolbarModule } from '@angular/material';

const modules = [MatSidenavModule, MatMenuModule, MatToolbarModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialNavigationModule { }
