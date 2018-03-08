import { NgModule } from '@angular/core';

import { MatSidenavModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatButtonModule, MatToolbarModule } from '@angular/material';

const modules = [MatSidenavModule, MatIconModule, MatCheckboxModule, MatMenuModule, MatButtonModule, MatToolbarModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
