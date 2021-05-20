import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbdropdownlistComponent } from './cbdropdownlist/cbdropdownlist.component';
import { CbdropdownelementComponent } from './cbdropdownelement/cbdropdownelement.component';
import { ListmanagerDirective } from './listmanager.directive';
import { InputListenerDirective } from './input-listener.directive';



@NgModule({
  declarations: [
    CbdropdownlistComponent,
    CbdropdownelementComponent,
    ListmanagerDirective,
    InputListenerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CbdropdownlistComponent, CbdropdownelementComponent]
})
export class CbdropdownModule { }
