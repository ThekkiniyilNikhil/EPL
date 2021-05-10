import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findSecondScore'
})
export class FindSecondScorePipe implements PipeTransform {

  transform(value: any) {
    return value[1];
  }

}
