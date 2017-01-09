import { NgForm } from '@angular/forms/src/directives';
import { Component } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    .ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'Andre',
    email: 'andrehao@gmail.com',
    password: 'teste',
    gender: 'male'
  };

  genders = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
