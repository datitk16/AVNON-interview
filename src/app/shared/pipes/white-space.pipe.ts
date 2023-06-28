import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whiteSpace'
})
export class WhiteSpacePipe implements PipeTransform {
  transform(value: string) {
    return value.replace(/([A-Z])/g, ' $1');
  }
}
