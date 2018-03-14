import { NgModule } from '@angular/core';

import { MatCardModule, MatDividerModule } from '@angular/material';

const modules = [MatCardModule, MatDividerModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialLayoutModule { }
