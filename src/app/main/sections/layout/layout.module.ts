import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import { LayoutGridComponent } from './grid.component';
import { LayoutListComponent } from './list.component';
import { LayoutDividerComponent } from './divider.component';
import { LayoutExpansionComponent } from './expansion.component';
import { LayoutCardComponent } from './card.component';
import { LayoutComponent } from './layout.component';
import { LayoutTabsComponent } from './tabs.component';
import { LayoutStepperComponent } from './stepper.component';

@NgModule({
  imports: [SharedModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, LayoutCardComponent, LayoutDividerComponent, LayoutListComponent,
    LayoutExpansionComponent, LayoutGridComponent, LayoutStepperComponent, LayoutTabsComponent],
  providers: [],
})
export class LayoutModule { }
