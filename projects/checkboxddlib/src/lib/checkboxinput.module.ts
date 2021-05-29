import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbiDropdown } from './cbidropdown/cbidropdown.component';
import { CheckboxInput } from './checkboxinput/checkboxinput.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CbiDropdown,
    CheckboxInput
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CbiDropdown,
    CheckboxInput
    ]
})
export class CheckboxInputModule { }
