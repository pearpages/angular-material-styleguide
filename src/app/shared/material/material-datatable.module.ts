import { NgModule } from '@angular/core';

import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

const modules = [MatPaginatorModule, MatSortModule, MatTableModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialDataTableModule { }
