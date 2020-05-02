import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup }   from '@angular/forms';

import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  customValidator: CustomvalidationService;
  submitted=false; 
  fb:FormBuilder;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      regEmail:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      frName: ['',[Validators.required, Validators.pattern('^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$')]],
      lsName: ['',[Validators.required, Validators.pattern('^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$')]],
      ctNumber: ['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      regPassword: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(14),
                          Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
      confPassword:['',Validators.required]
    },{
      validator:this.customValidator.MatchPassword('regPassword','confPassword'),
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted=true; 
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
    else{
      alert('Invalid Entries');
    }
  }
}

