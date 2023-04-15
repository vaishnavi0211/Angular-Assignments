import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  //public msg2="Hello Parent Component"

  @Input() public parentData:any

  @Output() public Mydata=new EventEmitter()

  public sendEvent(){
    this.Mydata.emit("Hello from child")
  }

  constructor(){}

  ngOnInit(){}

}
