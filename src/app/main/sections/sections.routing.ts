import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsControlComponent } from './forms';
import { PopupsModalsComponent } from './modals';
import { DataTableComponent } from './tables';
import { LayoutComponent } from './layout';
import { ButtonsComponent } from './buttons';
import { IndicatorsComponent } from './indicators';

const routes: Routes = [
  { path: 'examples/buttons', component: ButtonsComponent },
  { path: 'examples/indicators', component: IndicatorsComponent },
  { path: 'examples/forms-control', component: FormsControlComponent },
  { path: 'examples/layout', component: LayoutComponent },
  { path: 'examples/popups-modals', component: PopupsModalsComponent },
  { path: 'examples/data-table', component: DataTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule { }
