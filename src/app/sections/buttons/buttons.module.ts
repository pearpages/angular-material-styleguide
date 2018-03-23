import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import { BasicButtonsComponent } from './basic-buttons.component';
import { ToggleButtonsComponent } from './toggle-buttons.component';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ButtonsComponent, ToggleButtonsComponent, BasicButtonsComponent],
})
export class ButtonsModule { }
