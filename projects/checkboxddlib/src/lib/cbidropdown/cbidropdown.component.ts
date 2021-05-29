import { AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, HostListener, Input, OnInit, QueryList } from '@angular/core';
//import {  } '@fortawesome/fontawesome-free/svgs/solid'

@Component({
  selector: 'cbidropdown',
  host: {'class': 'dropdownhostcontext'},
  templateUrl: './cbidropdown.component.html',
  styleUrls: ['./cbidropdown.component.scss']
})
export class CbiDropdown {

  @Input()
  title = "";

  isFocused = false;

  constructor() { }


  @HostListener('click')
  private toggleFocus(): void{
    this.isFocused = !this.isFocused;
  }

}
