import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { HeaderComponent } from './header/header.component';
import { PasswordComponent } from './password/password.component';
import { RememberUserComponent } from './remember-user/remember-user.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    HeaderComponent,
    PasswordComponent,
    RememberUserComponent,
    LoginBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
