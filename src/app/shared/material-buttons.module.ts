import { NgModule } from '@angular/core';

import { MatIconModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';

const modules = [MatIconModule, MatButtonModule, MatButtonToggleModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialButtonsModule { }
