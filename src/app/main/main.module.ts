import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { PagesModule } from './pages/pages.module';
import { SectionsModule } from './sections';

@NgModule({
  imports: [SharedModule, SectionsModule, PagesModule]
})
export class MainModule { }

