import { NgModule } from '@angular/core';

import { MatSidenavModule, MatCheckboxModule, MatMenuModule, MatButtonModule, MatToolbarModule } from '@angular/material';

const components = [MatSidenavModule, MatCheckboxModule, MatMenuModule, MatButtonModule, MatToolbarModule];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialModule { }
