import { NgModule } from '@angular/core';

import { MatSidenavModule, MatCheckboxModule } from '@angular/material';

const components = [MatSidenavModule, MatCheckboxModule];

@NgModule({
  imports: components,
  exports: components
})
export class SharedModule { }
