import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable() // use it when the service is needing an injectable service. You don't need to user this annotation to the service that will be injected.
export class DataService {
	pushedData = new EventEmitter<string>();
	private data: string[] = [];

	constructor(private logService: LogService) {
	}

	addData(input: string) {
		this.data.push(input);
		this.logService.writeLog('Saved item: ' + input);
	}

	getData() {
		return this.data;
	}

	pushData(value: string) {
		this.pushedData.emit(value);
	}
}
