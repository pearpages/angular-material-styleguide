import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import { DataTableComponent } from './data-table.component';

@NgModule({
  imports: [SharedModule],
  declarations: [DataTableComponent],
  exports: [DataTableComponent]
})
export class DataTableModule { }
