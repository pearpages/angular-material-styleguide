import { Component, Inject } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
      <button mat-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
        Pizza party
      </button>
    </sty-expansion>

    <sty-expansion [title]="'Tooltip'">
      <span matTooltip="Tooltip!">I have a tooltip</span>
    </sty-expansion>

  </sty-page>
  `
})

export class PopupsModalsComponent {

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: 'John', animal: 'Tiger' }
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('The dialog was closed');
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
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

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party">
    Pizza party!!! 🍕
  </span>
  `,
  styles: [`.example-pizza-party { color: hotpink; }`],
})
export class PizzaPartyComponent {}
