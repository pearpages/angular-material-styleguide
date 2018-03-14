import { NgModule } from '@angular/core';

import { MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule } from '@angular/material';

const modules = [MatCardModule, MatDividerModule, MatExpansionModule, MatGridListModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialLayoutModule { }
