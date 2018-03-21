import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { FormsControlComponent } from './form-controls.component';
import { ButtonsModule } from './buttons';
import { LayoutComponent } from './layout.component';
import { PopupsModalsComponent, DialogOverviewExampleDialog, PizzaPartyComponent } from './popus-modals.component';
import { DataTableComponent } from './data-table.component';
import { ButtonsIndicatorsComponent } from './buttons';

const components = [FormsControlComponent, LayoutComponent, PopupsModalsComponent, DialogOverviewExampleDialog, PizzaPartyComponent, DataTableComponent];

const routes: Routes = [
  { path: 'examples/buttons-and-indicators', component: ButtonsIndicatorsComponent },
  { path: 'examples/forms-control', component: FormsControlComponent },
  { path: 'examples/layout', component: LayoutComponent },
  { path: 'examples/popups-modals', component: PopupsModalsComponent },
  { path: 'examples/data-table', component: DataTableComponent },
];
// TODO: create dialog example own module and move the entryComponents
// TODO: the same for the snackBar
@NgModule({
  entryComponents: [DialogOverviewExampleDialog, PizzaPartyComponent],
  imports: [ButtonsModule,ReactiveFormsModule, FormsModule, CommonModule, SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, ...components],
  declarations: components,
})
export class SectionsModule { }
