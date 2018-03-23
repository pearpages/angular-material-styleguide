import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsControlComponent } from './forms';
import { PopupsModalsComponent } from './modals';
import { DataTableComponent } from './tables';
import { LayoutComponent } from './layout';
import { ButtonsComponent } from './buttons';
import { IndicatorsComponent } from './indicators';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'indicators', component: IndicatorsComponent },
  { path: 'forms-control', component: FormsControlComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'popups-modals', component: PopupsModalsComponent },
  { path: 'data-table', component: DataTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule { }
