import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  driverLicense: string='';
  address: string='';
  password:string='';
  confirmPassword:string='';
  baseUrl: string = '';
  selectedRole: string = '';
  imageUrl: string = 'https://www.freshbooks.com/wp-content/uploads/2022/01/what-is-a-warehouse.jpg';


  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      
    });
  }

  
  get formControls() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      
      console.log(this.registrationForm.value);
    } else {
      
      alert('Please fill in all required fields.');
    }
  }


  userInput: string = ''
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let newValue = inputElement.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    inputElement.value = newValue; // Update the input value
    this.userInput = newValue; // Update the bound model value
  }
  onNgFormSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  

  
}
