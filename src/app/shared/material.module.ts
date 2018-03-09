import { NgModule } from '@angular/core';

import { MatSidenavModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatListModule, MatButtonModule, MatToolbarModule } from '@angular/material';

const modules = [MatSidenavModule, MatIconModule, MatCheckboxModule, MatListModule, MatMenuModule, MatButtonModule, MatToolbarModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
