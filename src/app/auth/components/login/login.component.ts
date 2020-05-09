import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      logEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      logPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
    });


    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit() {
    
    this.submitted = true;
    this.authenticationService.login(
      this.loginForm.value.logEmail,
      this.loginForm.value.logPassword)
      .subscribe((data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }

      );
  }
  reloadPage() {
    window.location.reload();
  }
  // redirectTo(){
  //   if(this.tokenStorage.getUser().roles=='ADMIN'){
  //     this.router.navigate(['/admin']);
  //   }
  //   if(this.tokenStorage.getUser().roles=='FACILITATOR'){
  //     this.router.navigate(['/facilitator']);
  //   }
  //   else{
  //     this.router.navigate(['/consumer']);
  //   }
  // }
}

