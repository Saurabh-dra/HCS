import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading = false;;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      regEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      frName: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$'), Validators.maxLength(15)]],
      lsName: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$'), Validators.maxLength(15)]],
      ctNumber: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      regPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
      confPassword: ['', Validators.required]
    },
      {
        validator: this.customValidator.MatchPassword('regPassword', 'confPassword'),
      }
    );
  }


  get registerFormControl() { return this.registerForm.controls; }

  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    this.registerForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

