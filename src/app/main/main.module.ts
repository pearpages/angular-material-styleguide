import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { LandingComponent } from './landing.component';
import { ResourcesComponent } from './resources.component';
import { SectionsModule } from './sections';
// TODO: sections should have its own routed module
import { ButtonsIndicatorsComponent } from './sections/buttons-indicators.component';
import { FormsControlComponent } from './sections/form-controls.component';

export const appRoutedComponents = [ResourcesComponent, LandingComponent];

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'resources', component: ResourcesComponent },
  // TODO: sections should have its own routed module
  { path: 'examples/buttons-and-indicators', component: ButtonsIndicatorsComponent },
  { path: 'examples/forms-control', component: FormsControlComponent },
];

@NgModule({
  declarations: [...appRoutedComponents],
  imports: [RouterModule.forRoot(routes), SharedModule, SectionsModule],
  exports: [RouterModule, ...appRoutedComponents],
})
export class AppRoutingModule { }

