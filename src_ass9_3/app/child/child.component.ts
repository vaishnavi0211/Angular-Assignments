import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  public ansprime:any
  public anscapitalcnt:any
  constructor(public nobj:NumberService,public sobj:StringService){}
  ngOnInit(): void {
    this.ansprime=this.nobj.IsPrime(5)
    this.anscapitalcnt=this.sobj.countCapital("MarveLLous InfoSystems")
  }
}
