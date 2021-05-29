import { AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, HostListener, Input, OnInit, QueryList } from '@angular/core';
import { CbdropdownelementComponent } from '../cbdropdownelement/cbdropdownelement.component';
//import {  } '@fortawesome/fontawesome-free/svgs/solid'

@Component({
  selector: 'cbdropdownlist',
  host: {'class': 'ListClass'},
  templateUrl: './cbdropdownlist.component.html',
  styleUrls: ['./cbdropdownlist.component.scss']
})
export class CbdropdownlistComponent {

  @Input()
  placeholder = "";

  isFocused = false;

  constructor() { }


  @HostListener('click')
  private toggleFocus(): void{
    this.isFocused = !this.isFocused;
  }

}
