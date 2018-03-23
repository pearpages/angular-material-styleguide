import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/shared';
import { SectionsRoutingModule } from './sections.routing';
import { StyModalsModule } from './modals';
import { StyFormsModule } from './forms';
import { DataTableModule } from './tables';
import { LayoutModule } from './layout';
import { ButtonsModule } from './buttons';
import { IndicatorsModule } from './indicators';

// TODO: create dialog example own module and move the entryComponents
// TODO: the same for the snackBar
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ButtonsModule,
    LayoutModule,
    DataTableModule,
    StyFormsModule,
    IndicatorsModule,
    StyModalsModule,
    SectionsRoutingModule
  ]
})
export class SectionsModule { }
