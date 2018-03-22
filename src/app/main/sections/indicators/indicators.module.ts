import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { ChipButtonsComponent } from './chips.component';
import { IndicatorsComponent } from './indicators.component';
import { IndicatorSpinnerComponent } from './spinner.component';
import { IndicatorProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ChipButtonsComponent, IndicatorsComponent, IndicatorSpinnerComponent, IndicatorProgressBarComponent],
})
export class IndicatorsModule { }
