import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { login } from '../interfaces/todo';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  user: login = {
    name: '',
    email: '',
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value, this.user);
    }
  }

  validateEmail() {
    const emailRjax = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRjax.test(this.user.email)
  }
}
