import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { ChipButtonsComponent } from './chips.component';
import { IndicatorsComponent } from './indicators.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ChipButtonsComponent, IndicatorsComponent],
})
export class IndicatorsModule { }
