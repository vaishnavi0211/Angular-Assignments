import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk'
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value: number,Param: string):any {
    let str:string
    if (Param=="Prime"){
      str=checkPrime(value)
      return str
    }

    if(Param=="Perfect"){
      str=checkPefect(value)
      return str
    }
    if(Param=="Even"){
      str=checkEven(value)
      return str
    } 
    if(Param=="Odd"){
      str=checkOdd(value)
      return str
    }
      
  }
}
function checkOdd(num:number):any{
  let str:string
  if(num%2!=0){
    str=" is a odd number"
    return str
  }
  else
  {
    str=" is not a odd number"
    return str
  }
}

function checkEven(num:number):any{
  let str:string
  if(num%2==0){
    str=" is a even number"
    return str
  }
  else{
    str=" is not a even number"
    return str
  }
}

function checkPefect(num:number):any{
  let sum=0
  let str:string
  for(let i=1;i<num;i++){
    if(num%i==0){
      sum+=i
    }
  }
  if(sum==num){
    str=" is a perfect number"
    return str
  }
  else{
    str=" is not a perfect number"
    return str
  }
}

function checkPrime(num:number):any{
  let str:string=""
  if(num<=1){
    str=" is not a prime number"
    return str
  }
  for(let i=0;i<num/2;i++){
    if(num%2==0){
      str="is a prime number"
      return str
    }
    else{
      str="is not a prime number"
      return str
    }
  }
}



