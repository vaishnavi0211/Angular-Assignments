import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  public add=0;
  public sub=0;
  constructor(public sobj:ArithmaticService){

  }
  ngOnInit(): void {
    this.add=this.sobj.addition(10,20)
    this.sub=this.sobj.subtraction(30,10)
  }
}
