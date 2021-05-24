import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbdropdownlistComponent } from './cbdropdownlist/cbdropdownlist.component';
import { CbdropdownelementComponent } from './cbdropdownelement/cbdropdownelement.component';
import { ListmanagerDirective } from './listmanager.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CbdropdownlistComponent,
    CbdropdownelementComponent,
    ListmanagerDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CbdropdownlistComponent,
     CbdropdownelementComponent,
      ListmanagerDirective]
})
export class CbdropdownModule { }
