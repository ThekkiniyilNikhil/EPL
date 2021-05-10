import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAbbreviate'
})
export class NameAbbreviatePipe implements PipeTransform {

  transform(value: string): string {
    if (value.indexOf(' ') >= 0) {
      const firstLetter = (value.split(' ')[0]).charAt(0);
      const secondLetter = (value.split(' ')[1]).slice(0,2);
      return firstLetter + secondLetter;
    } else {
      return value.slice(0,3);
    }
  }
}
