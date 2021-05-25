import { AfterContentInit, Component, ContentChildren, ElementRef, forwardRef, HostListener, Input, OnInit, QueryList } from '@angular/core';
import { CbdropdownelementComponent } from '../cbdropdownelement/cbdropdownelement.component';
import { ListmanagerDirective } from '../listmanager.directive';
//import {  } '@fortawesome/fontawesome-free/svgs/solid'

@Component({
  selector: 'cbdropdownlist',
  host: {'class': 'ListClass'},
  templateUrl: './cbdropdownlist.component.html',
  styleUrls: ['./cbdropdownlist.component.scss']
})
export class CbdropdownlistComponent implements OnInit, AfterContentInit {

  @ContentChildren(ListmanagerDirective, {descendants: true})
  private dropdownElement!: QueryList<ListmanagerDirective>

  @Input()
  placeholder = "";
  isFocused = false;

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
  }

  @HostListener('click')
  private toggleFocus(): void{
    this.isFocused = !this.isFocused;
  }

  display(){
    console.log(this.dropdownElement);
  }

}
