import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';
@Component({
    selector: 'si-cmp-b',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `
})
export class CmpBComponent implements OnInit {
    value = '';
    items: string[] = [];

    onLog(value: string) {
        this.logService.writeLog(value);
    }

    onStore(value: string) {
        this.dataService.addData(value);
    }

    onGet() {
        this.items = this.dataService.getData().slice(0);
    }

    onSend(value: string) {

    }

    constructor(private logService: LogService, private dataService: DataService) {

    }

    ngOnInit() {
        // observing the event emitter
        this.dataService.pushedData.subscribe(
            data => this.value = data
        );
    }
}
