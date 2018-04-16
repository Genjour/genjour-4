import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryHundered'
})
export class SummaryHunderedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
     return null;

    return value.substr(0, 100)+ '...';
    }

}
