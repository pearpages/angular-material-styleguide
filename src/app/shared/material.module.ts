import { NgModule } from '@angular/core';

import { MatSidenavModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatListModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const modules = [MatSidenavModule, MatIconModule, MatCheckboxModule, MatListModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatButtonToggleModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
