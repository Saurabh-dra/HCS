import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;
  fb:FormBuilder;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      regEmail:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      regPassword: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(14),
                    Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.log(this.loginForm.value);
  }

}
}