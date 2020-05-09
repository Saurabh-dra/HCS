import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm:FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      logEmail:['',[Validators.required, 
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }

  get resetFormControl() {
    return this.resetForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.resetForm.invalid){
      return;
    }
    console.log(this.resetForm.value);
  }

}
