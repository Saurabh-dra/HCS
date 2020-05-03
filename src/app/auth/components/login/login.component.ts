import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;
  loading=false;
  returnUrl: string;


  constructor(
    private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      logEmail:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      logPassword: ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
    });
    
     // reset login status
     this.authenticationService.logout();

     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
    this.loading = true;
    this.authenticationService.login(this.loginFormControl.logEmail.value, this.loginFormControl.logPassword.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}
