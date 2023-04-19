import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  
  public countCapital(str:string):any{
    let uppercnt:number=0
    for(let i:number=0;i<str.length;i++)
    {
      if(str[i]>='A' && str[i]<='Z')
      {
        uppercnt++
      }
    }
    return uppercnt
  }
}
