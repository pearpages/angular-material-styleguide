import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';
import { PagesRoutingModule, appRoutedComponents } from './pages.routing';

@NgModule({
  declarations: [...appRoutedComponents],
  imports: [PagesRoutingModule, SharedModule],
  exports: [RouterModule, ...appRoutedComponents],
})
export class PagesModule { }
