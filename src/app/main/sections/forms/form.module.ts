import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared';
import { SectionCheckboxComponent } from './checkbox.component';
import { SectionDatepickerComponent } from './date-picker.component';
import { FormsControlComponent } from './form-controls.component';
import { SectionActoCompleteComponent } from './auto-complete.component';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, FormsModule],
  exports: [FormsControlComponent],
  declarations: [FormsControlComponent, SectionActoCompleteComponent, SectionCheckboxComponent, SectionDatepickerComponent],
})
export class StyFormsModule { }
