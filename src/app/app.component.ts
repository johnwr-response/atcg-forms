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
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) { // ElementRef // HTMLFormElement
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
