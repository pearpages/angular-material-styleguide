import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { FormsControlComponent } from './form-controls.component';
import { LayoutComponent } from './layout.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators.component';

const components = [ButtonsIndicatorsComponent, FormsControlComponent, LayoutComponent];

const routes: Routes = [
  { path: 'examples/buttons-and-indicators', component: ButtonsIndicatorsComponent },
  { path: 'examples/forms-control', component: FormsControlComponent },
  { path: 'examples/layout', component: LayoutComponent },
];

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, ...components],
  declarations: components,
})
export class SectionsModule { }
