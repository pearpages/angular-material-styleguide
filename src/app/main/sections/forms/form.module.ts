import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared';
import { FormsControlComponent } from './form-controls.component';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, FormsModule],
  exports: [FormsControlComponent],
  declarations: [FormsControlComponent],
})
export class StyFormsModule { }
