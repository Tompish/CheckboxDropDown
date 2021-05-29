import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbdropdownlistComponent } from './cbdropdownlist/cbdropdownlist.component';
import { CbdropdownelementComponent } from './cbdropdownelement/cbdropdownelement.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CbdropdownlistComponent,
    CbdropdownelementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CbdropdownlistComponent,
    CbdropdownelementComponent
    ]
})
export class CbdropdownModule { }
