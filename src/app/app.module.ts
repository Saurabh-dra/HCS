import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertService } from 'src/app/services/alert.service';

import { AuthenticationService } from 'src/app/services/authentication.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomvalidationService } from './services/customvalidation.service';
import { TokenStorageService } from './services/token-storage.service';
import { UserService } from './services/user.service';
import { authInterceptorProviders } from './helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
  AlertService,
  AuthenticationService,
  CustomvalidationService,
  TokenStorageService,
  UserService,
  authInterceptorProviders
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
