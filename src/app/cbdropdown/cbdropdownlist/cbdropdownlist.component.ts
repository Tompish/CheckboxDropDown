import { AfterContentInit, Component, ContentChildren, ElementRef, HostListener, OnInit, QueryList } from '@angular/core';
import { CbdropdownelementComponent } from '../cbdropdownelement/cbdropdownelement.component';
import { ListmanagerDirective } from '../listmanager.directive';

@Component({
  selector: 'cbdropdownlist',
  templateUrl: './cbdropdownlist.component.html',
  styleUrls: ['./cbdropdownlist.component.scss']
})
export class CbdropdownlistComponent implements OnInit, AfterContentInit {

  @ContentChildren(ListmanagerDirective)
  private dropdownElement!: QueryList<ListmanagerDirective>

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    console.log(this.dropdownElement);
  }

}
