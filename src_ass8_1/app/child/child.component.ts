import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  public items=""
  public data=""
  public getTextBoxVal(items:any):string{
    this.data=(items.value)
    return this.data
  }
}
