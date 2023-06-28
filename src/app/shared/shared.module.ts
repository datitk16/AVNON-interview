import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { WhiteSpacePipe } from './pipes/white-space.pipe';
import { TextareaComponent } from './components/textarea/textarea.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



const _declarations = [
  EnumToArrayPipe,
  WhiteSpacePipe
]
@NgModule({
  declarations: [
    _declarations,
    TextareaComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [_declarations,
    TextareaComponent,
    LanguagesComponent],
  providers: [WhiteSpacePipe]
})
export class SharedModule { }
