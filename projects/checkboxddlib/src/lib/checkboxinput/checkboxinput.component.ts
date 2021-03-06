import { Component, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxInputData } from '../checkboxinputdata';

@Component({
  selector: 'checkboxinput',
  templateUrl: './checkboxinput.component.html',
  styleUrls: ['./checkboxinput.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(()=>CheckboxInput), multi: true}]
})
export class CheckboxInput implements ControlValueAccessor {

  @Input()
  public placeholder = "";
  @Input('value')
  public inputValue = "";
  
  private _onChange = (_: any)=>{}
  private _onTouch = ()=>{}
  private _value: CheckboxInputData = {checked: false, value: ''};

  get checked(){
    return this._value.checked;
  }

  set checked(value: any){
    this._value.checked = value;// == 'on'? true: false;
  }

  get value(){
    return this._value.value; //? this._value.value : '';
  }

  set value(value: string){
    this._value.value = value;
  }

  constructor() { }

  @HostBinding('tabindex') tabindex = 0;

  @HostListener('click', ['$event'])
  preventSpread(event: KeyboardEvent){
    event.stopPropagation();
  }

  @HostListener('blur')
  updateValue(){
    this._onChange(this._value);
  }

  registerOnChange(fn: (_: any)=> void){
    this._onChange = fn;
  }

  registerOnTouched(fn: any){
    this._onTouch = fn;
  }


  writeValue(value: any){
    if(typeof(value)=='object' && value != null){
      this._value = value;
    }
    else{
      if(value == null){
        this._value.checked = false;
      }
      else if(value == 'on'){
        this._value.checked = true;
      }
      else{
        this._value.value = value;
      }
    }
  }

}
