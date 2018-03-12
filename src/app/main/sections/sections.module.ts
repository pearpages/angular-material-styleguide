import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { FormsControlComponent } from './form-controls.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators.component';

const components = [ButtonsIndicatorsComponent, FormsControlComponent];

@NgModule({
  imports: [SharedModule],
  exports: components,
  declarations: components,
})
export class SectionsModule { }
