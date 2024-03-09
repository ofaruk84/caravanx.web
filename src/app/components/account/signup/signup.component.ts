import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioChange, MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatCardModule,MatButtonModule,MatRadioModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  isIndividual = true

  constructor(private formBuilder: FormBuilder) { 


  }

  ngOnInit(): void {
    this.signupForm = this.createSignupForm(this.isIndividual);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value); // You can handle login logic here
    } else {
      // Mark all form fields as touched to display validation errors
      this.signupForm.markAllAsTouched();
    }
  }
  onUserTypeChange(event: MatRadioChange) {
    debugger
    this.isIndividual = event.value === 'individual';
    this.signupForm = this.createSignupForm(this.isIndividual);
  }

  private createSignupForm(isIndividual:boolean){

    return isIndividual ? this.createIndividualSignupForm() : this.createCompanySignupForm();
  }
  private  createCompanySignupForm() : any {
    const config = {
      companyName: ['', Validators.required],
      email : ['',Validators.required],
      password: ['', Validators.required]
    }

    return this.formBuilder.group(config);
  }

  private  createIndividualSignupForm() :any{

    const config = {
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email : ['',Validators.required],
      password: ['', Validators.required]
    }

    return this.formBuilder.group(config);
  }

}
