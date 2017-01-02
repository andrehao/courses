import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>Root component</h1>
  	<fa-lifecycle *ngIf="!delete"></fa-lifecycle>
  	<button (click)="delete = true">Click to delete</button>
  `
})
export class AppComponent {
  title = 'I changed it!';
  delete = false;
}
