import { Directive, ElementRef, Host, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[inputListener]'
})
export class InputListenerDirective implements OnInit{

  public isFocused = false;
  constructor(private el: ElementRef) { }

  ngOnInit(){}

  @HostListener('focus', ['$event.target'])
  onFocus(){
    console.log('Yoo');
    this.isFocused = true;
  }

  @HostListener('blur', ['$event.target'])
  onBlur(){
    this.isFocused = false;
  }

}
