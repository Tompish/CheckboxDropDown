import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';
import { InputListenerDirective } from '../input-listener.directive';

@Component({
  selector: 'cbdropdownelement',
  templateUrl: './cbdropdownelement.component.html',
  styleUrls: ['./cbdropdownelement.component.scss']
})
export class CbdropdownelementComponent implements AfterContentInit {

  @ContentChild(InputListenerDirective, {static: false})
  private inputListener!: InputListenerDirective;

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  ngAfterContentInit(){
  }
//  @HostListener('focus')
//  hasFocus(){
//    console.log('I have focus');
//  }

  @HostBinding('class.input-focused')
  get isFocused(){
    return this.inputListener ? this.inputListener.isFocused: false;
  }

  @HostListener('click')
  onFocus(){
    this.renderer.addClass(this.el.nativeElement, 'input-focused')
  }

  @HostListener('blur')
  onBlur(){
    console.log('wtf');
    this.renderer.removeClass(this.el.nativeElement, 'input-focus');
  }

}
