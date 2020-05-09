import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { FacilitatorComponent } from './components/facilitator/facilitator.component';


const routes: Routes = [
  
   { path: 'login', component: LoginComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'reset-password', component: ResetPasswordComponent},
   { path: 'consumer', component: ConsumerComponent },
   { path: 'facilitator', component: FacilitatorComponent },
   { path: 'admin', component: AdminComponent },
   { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
