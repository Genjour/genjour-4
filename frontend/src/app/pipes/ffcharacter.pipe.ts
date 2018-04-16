import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ffcharacter'
})
export class ffcharacter implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
     return null;

    return value.substr(0, 55);
    }

}
