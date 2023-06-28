import { Pipe, PipeTransform } from '@angular/core';
import { WhiteSpacePipe } from './white-space.pipe';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  constructor(
    private whiteSpacePipe: WhiteSpacePipe
  ) { }

  transform(data: Object): any {
    return Object.keys(data).map(x => {
      return {
        key: x,
        name: this.whiteSpacePipe.transform(x)
      };
    });
  }


}
