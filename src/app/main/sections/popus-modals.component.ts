import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'sty-popups-modals',
  template: `
  <sty-page title="Layout">

    <sty-expansion [title]="'Dialog'">
      <p>In this example look at entryComponents and how uses @Inject and gets the dialog reference</p>
      <p><a href="https://material.angular.io/components/dialog/overview">Dialog docs</a></p>
      <p><button mat-raised-button (click)="openDialog()">Pick one</button></p>
    </sty-expansion>

    <sty-expansion [title]="'Snackbar'">

    </sty-expansion>

    <sty-expansion [title]="'Tooltip'">

    </sty-expansion>

  </sty-page>
  `
})

export class PopupsModalsComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: 'John', animal: 'Tiger' }
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title>Hi {{data.name}}</h1>
  <div mat-dialog-content>
    <p>What's your favorite animal?</p>
    <mat-form-field>
      <input matInput [(ngModel)]="data.animal">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
    <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
  </div>
  `,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
