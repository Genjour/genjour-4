import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryFifty'
})
export class SummaryFiftyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
     return null;

    return value.substr(0, 55);
    }
    
}
