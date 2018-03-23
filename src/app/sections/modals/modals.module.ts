import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared';
import { PopupsModalsComponent, DialogOverviewExampleDialog, PizzaPartyComponent } from './popus-modals.component';

@NgModule({
  entryComponents: [DialogOverviewExampleDialog, PizzaPartyComponent],
  imports: [SharedModule, FormsModule],
  exports: [PopupsModalsComponent],
  declarations: [PopupsModalsComponent, DialogOverviewExampleDialog, PizzaPartyComponent],
  providers: [],
})
export class StyModalsModule { }
