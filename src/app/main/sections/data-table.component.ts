import { Component, Inject } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'sty-popups-modals',
  template: `
  <sty-page title="Data Table">

    <sty-expansion [title]="'Paginator'">
      <!--div class="example-container mat-elevation-z8">
        <mat-table #table [dataSource]="dataSource">

          <ng-container matColumnDef="position">
            <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
          </ng-container>

          <ng-container matColumnDef="name">
            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
          </ng-container>

          <ng-container matColumnDef="weight">
            <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
          </ng-container>

          <ng-container matColumnDef="symbol">
            <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
            <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
          </ng-container>

          <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
          <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
        </mat-table>

        <mat-paginator #paginator
                       [pageSize]="10"
                       [pageSizeOptions]="[5, 10, 20]"
                       [showFirstLastButtons]="true">
        </mat-paginator>
      </div-->
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
