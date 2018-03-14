import { NgModule } from '@angular/core';

import { MatCardModule, MatDividerModule, MatListModule, MatExpansionModule, MatGridListModule, MatTabsModule } from '@angular/material';

const modules = [MatCardModule, MatListModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatTabsModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialLayoutModule { }
