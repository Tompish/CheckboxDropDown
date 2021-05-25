import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkbuttondropdown';
  public items = [{checked: false, value: 'Mario'},{checked: false, value: 'Luigi'},{checked: false, value: 'ZSS'}]
}
