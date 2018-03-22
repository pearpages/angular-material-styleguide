import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'app/shared';
import { PopupsModalsComponent, StyModalsModule } from './modals';

import { FormsControlComponent, StyFormsModule } from './forms';
import { DataTableModule, DataTableComponent } from './tables';
import { LayoutModule, LayoutComponent } from './layout';
import { ButtonsModule, ButtonsComponent } from './buttons';
import { IndicatorsModule, IndicatorsComponent } from './indicators';

const routes: Routes = [
  { path: 'examples/buttons', component: ButtonsComponent },
  { path: 'examples/indicators', component: IndicatorsComponent },
  { path: 'examples/forms-control', component: FormsControlComponent },
  { path: 'examples/layout', component: LayoutComponent },
  { path: 'examples/popups-modals', component: PopupsModalsComponent },
  { path: 'examples/data-table', component: DataTableComponent },
];
// TODO: create dialog example own module and move the entryComponents
// TODO: the same for the snackBar
@NgModule({
  imports: [ButtonsModule, LayoutModule, DataTableModule, StyFormsModule, IndicatorsModule,
    StyModalsModule, CommonModule, SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SectionsModule { }
