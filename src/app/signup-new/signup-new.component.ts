import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-signup-new',
  templateUrl: './signup-new.component.html',
  styleUrl: './signup-new.component.css'
})
export class SignupNewComponent {

  registrationForm: FormGroup;
  imageUrl: string = 'https://www.freshbooks.com/wp-content/uploads/2022/01/what-is-a-warehouse.jpg';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]{2,}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      role: ['', Validators.required],
      driverLicense: ['',[Validators.pattern(/^[A-Za-z]{2}[0-9]{2}\s?[0-9]{4}\s?[0-9]{7}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}/)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(6), Validators.pattern(/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}/)]]
    },{ validator: this.passwordMatchValidator });
  }


  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
  }

  onSubmit() {
    if (this.registrationForm.valid) {
     console.log(this.registrationForm.value);
     
    }
  }

}
