import { NgModule } from '@angular/core';

import { MatSidenavModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatListModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';

const modules = [MatSidenavModule, MatIconModule, MatCheckboxModule, MatListModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
