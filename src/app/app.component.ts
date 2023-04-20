import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  /*
    as application starts check local storage to check loged in or not.
    => here global state probably observable is helpful
  */
}
