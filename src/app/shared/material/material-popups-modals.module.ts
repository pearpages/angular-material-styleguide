import { NgModule } from '@angular/core';

import { MatDialogModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';

const modules = [MatDialogModule, MatSnackBarModule, MatTooltipModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialPopupsModalsModule { }
