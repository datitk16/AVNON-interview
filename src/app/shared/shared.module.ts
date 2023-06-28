import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { WhiteSpacePipe } from './pipes/white-space.pipe';



const _declarations = [
  EnumToArrayPipe,
  WhiteSpacePipe
]
@NgModule({
  declarations: [
    _declarations
  ],
  imports: [
    CommonModule,
  ],
  exports: [_declarations],
  providers: [WhiteSpacePipe]
})
export class SharedModule { }
