import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMessageModalComponent } from './components/dialog-message-modal/dialog-message-modal.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../+state/app.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    DialogMessageModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    StoreModule.forRoot({ app: reducer }),
    EffectsModule.forRoot([]),
  ]
})
export class CoreModule { }
