import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm: FormGroup;
  rememberMe: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Process login logic here
      console.log('Form submitted successfully.');
    } else {
      // Handle invalid form
      console.log('Form is invalid.');
    }
  }

  // You can implement methods here to save and retrieve the remembered state
  // For example:
  saveRememberedState(): void {
    localStorage.setItem('rememberMe', this.rememberMe ? 'true' : 'false');
  }

  retrieveRememberedState(): void {
    const rememberMeValue = localStorage.getItem('rememberMe');
    if (rememberMeValue) {
      this.rememberMe = rememberMeValue === 'true';
    }
  }

  // You may call these methods based on your application logic (e.g., in ngOnInit)
}
