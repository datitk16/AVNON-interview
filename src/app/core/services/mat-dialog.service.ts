import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { DialogMessageModalComponent } from '../components/dialog-message-modal/dialog-message-modal.component';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnDestroy() { }

  showMatDialogModal(component: ComponentType<any>, config?: MatDialogConfig<any>): Observable<any> {
    const dialogRef = this.dialog.open(component, { ...config });
    return dialogRef.afterClosed();
  }

  showInfoMessage(message: string, onOkHandler?: () => void): void {
    this.showMatDialogModal(DialogMessageModalComponent, {
      data: {
        titleText: 'Info',
        titleIcon: 'info',
        titleClass: 'info',
        messageText: message,
        onOkHandler: onOkHandler
      },
      width: Constants.messageModalWith
    })
  }
}
