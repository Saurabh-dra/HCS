import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;

  constructor(
    private fb:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      logEmail:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      logPassword: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.loginForm.value);
    if(this.loginForm.invalid){
      return;
    }
    // if(this.loginFormControl.logEmail.value=="admin@gmail.com" && this.loginFormControl.logPassword.value=="Admin@123") {
    //   this.router.navigateByUrl('/');
    // }
  }

}
