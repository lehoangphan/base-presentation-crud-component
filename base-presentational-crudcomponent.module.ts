import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePresentationalCRUDComponent } from './base-presentational-crud/base-presentational-crud.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatConfirmModule } from '../mat-confirm/mat-confirm.module';
import { MatConfirmDialogComponent } from '../mat-confirm/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatConfirmDialogWithFormComponent } from '../mat-confirm/mat-confirm-dialog-with-form/mat-confirm-dialog-with-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatConfirmModule
  ],
  entryComponents: [
    MatConfirmDialogComponent, 
    MatConfirmDialogWithFormComponent
  ],
  exports: [
    // BasePresentationalCRUDComponent
  ]
})
export class BasePresentationalCRUDComponentModule { }
