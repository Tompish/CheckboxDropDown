import { Component } from '@angular/core';
import { CheckboxInputData } from 'checkboxddlib'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkboxddtest';
  ssbu: CheckboxInputData[];
  item: CheckboxInputData;
  constructor(){
    this.ssbu = [{checked: false, value: 'Diddy Kong'}, {checked: true, value: 'Sephirot'}];

    this.item = {checked: false, value: "Zss"};
  }
}
