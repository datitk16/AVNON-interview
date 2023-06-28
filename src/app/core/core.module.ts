import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogMessageModalComponent } from './components/dialog-message-modal/dialog-message-modal.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../+state/app.reducer';

@NgModule({
  declarations: [
    DialogMessageModalComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ app: reducer }),
    EffectsModule.forRoot([]),
  ]
})
export class CoreModule { }
