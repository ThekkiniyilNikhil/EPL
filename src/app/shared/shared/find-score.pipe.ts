import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findScore'
})
export class FindScorePipe implements PipeTransform {

  transform(value: any) {
    return value[0];
  }

}
