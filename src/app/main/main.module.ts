import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';
import { PagesModule } from './pages';
import { SectionsModule } from './sections';

@NgModule({
  imports: [SharedModule, SectionsModule, PagesModule]
})
export class MainModule { }

