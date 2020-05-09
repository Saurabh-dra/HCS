import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { FacilitatorComponent } from './components/facilitator/facilitator.component';
import { ConsumerComponent } from './components/consumer/consumer.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, HomeComponent, AdminComponent, FacilitatorComponent, ConsumerComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent, 
    ResetPasswordComponent,
    HomeComponent,
    AdminComponent, 
    FacilitatorComponent, 
    ConsumerComponent
  ]
})
export class AuthModule { }
