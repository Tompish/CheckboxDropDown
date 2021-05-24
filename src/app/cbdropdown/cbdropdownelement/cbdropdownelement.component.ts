import { AfterViewInit, Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'cbdropdownelement',
  templateUrl: './cbdropdownelement.component.html',
  styleUrls: ['./cbdropdownelement.component.scss']
})
export class CbdropdownelementComponent implements AfterViewInit {

  @Input()
  public inputValue = "";
  @Input()
  public checkboxValue = false;

  constructor() { }

  ngAfterViewInit(){
  }

  @HostBinding('tabindex') tabindex = 0;

  @HostListener('click', ['$event'])
  preventSpread(event: KeyboardEvent){
    event.stopPropagation();
  }

}
