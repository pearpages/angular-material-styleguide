import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import { PagesModule } from './pages';
import { SectionsModule } from './sections';

@NgModule({
  imports: [
    SharedModule,
    PagesModule,
    SectionsModule]
})
export class MainModule { }

