import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Working with Pipe';
  testValue = this.titleCasePipe.transform('firstletter should be upper case.');

  constructor(public titleCasePipe: TitleCasePipe) {}
}
