import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyles]'
})
export class CustomStylesDirective {
  
  constructor(public eoj1:ElementRef) { 
    this.eoj1.nativeElement.style='background-color:yellow ; font-weight:bold ; font-style:italic'
  }
}
