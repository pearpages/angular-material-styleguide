import { NgModule } from '@angular/core';

import { MatCardModule, MatDividerModule, MatExpansionModule } from '@angular/material';

const modules = [MatCardModule, MatDividerModule, MatExpansionModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialLayoutModule { }
