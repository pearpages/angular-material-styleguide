import { NgModule } from '@angular/core';

import { MatIconModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

const modules = [MatIconModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBarModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialButtonsModule { }
