import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>Root component</h1>
  	<fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
  		{{test}}
  	</fa-lifecycle>
  	<button (click)="delete = true">Click to delete</button>
  	<button (click)="test = 'Changed value'">Click to Change Content</button>
  	<button (click)="boundValue = 2000">Click to Change Binding</button>
  `
})
export class AppComponent {
  title = 'I changed it!';
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
