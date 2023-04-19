import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {
  public addition(num1:number,num2:number){
    return num1+num2
  }
  public subtraction(num1:any,num2:any){
    return num1-num2
  }
  constructor() { }
}
