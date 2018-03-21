import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { BasicButtonsComponent } from './basic-buttons.component';
import { ToggleButtonsComponent } from './toggle-buttons.component';
import { ChipButtonsComponent } from './chips.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators.component';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [ChipButtonsComponent, ButtonsIndicatorsComponent, ToggleButtonsComponent, BasicButtonsComponent],
  providers: [],
})
export class ButtonsModule { }
