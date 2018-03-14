import { NgModule } from '@angular/core';

import { MatCardModule, MatDividerModule, MatListModule, MatExpansionModule, MatGridListModule } from '@angular/material';

const modules = [MatCardModule, MatListModule, MatDividerModule, MatExpansionModule, MatGridListModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialLayoutModule { }
