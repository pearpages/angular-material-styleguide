import { Component, Inject } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'sty-popups-modals',
  template: `
  <sty-page title="Data Table">

    <sty-expansion [title]="'Paginator'">

    </sty-expansion>

    <sty-expansion [title]="'Sort header'">

    </sty-expansion>

    <sty-expansion [title]="'Table'">

    </sty-expansion>

  </sty-page>
  `
})

export class DataTableComponent {

}
