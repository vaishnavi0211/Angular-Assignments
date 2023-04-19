import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public IsPrime(num:number):any
  {
    let flag:number=0
    let i=0
    if(num<=1){
      flag=0
    }
    for(i=1;i<=num/2;i++)
    {
      if(num%i==0)
      {
        
        flag++
      
      }
    }
    if(flag==1){
      return "is prime"
    }
    else{
      return "is not prime"
    }
  }
}
