import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string
  {
    let str=""
    for (let i=value.length-1;i>=0;i--){
      str=str+value[i]
    }
    return str;
  }

}
