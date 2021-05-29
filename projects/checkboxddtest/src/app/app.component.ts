import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkboxddtest';
  ssbu = [{checked: true, value: "CSS"}, { checked: false, value: "Bowser"}]
}
