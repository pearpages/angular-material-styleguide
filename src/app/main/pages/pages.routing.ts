import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { ResourcesComponent } from './resources.component';

export const appRoutedComponents = [ResourcesComponent, LandingComponent];

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
