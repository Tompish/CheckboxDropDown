import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'cbdropdownelement',
})
export class ListmanagerDirective {

  constructor(private el: ElementRef) { }

}
