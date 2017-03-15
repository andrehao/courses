import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fotos: Object[] = [];

  constructor(private http: Http) {
    this.http.get('http://localhost:3000/v1/fotos')
      .map((response: Response) => response.json())
      .subscribe(
      (data: Object[]) => {
        console.log(data);
      }
    );

  }
}
