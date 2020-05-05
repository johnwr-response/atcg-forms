import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('f') signUpForm: NgForm; // Pre @Angular 8
  @ViewChild('f', {static: false}) signUpForm: NgForm; // From @Angular 8
  defaultQuestion = 'teacher';
  answer = "";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) { // ElementRef // HTMLFormElement
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
