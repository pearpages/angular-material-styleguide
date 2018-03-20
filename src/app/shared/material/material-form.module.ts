import { NgModule } from '@angular/core';

import { MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';

const modules = [MatCheckboxModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialFormModule { }
