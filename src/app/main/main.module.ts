import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { LandingComponent } from './landing.component';
import { ResourcesComponent } from './resources.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators.component';

export const appRoutedComponents = [ResourcesComponent, LandingComponent, ButtonsIndicatorsComponent];

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'examples/buttons-and-indicators', component: ButtonsIndicatorsComponent },
];

@NgModule({
  declarations: [...appRoutedComponents],
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule, ...appRoutedComponents],
})
export class AppRoutingModule { }

