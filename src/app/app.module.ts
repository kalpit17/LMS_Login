import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { SignupNewComponent } from './signup-new/signup-new.component';

@NgModule({
  declarations: [
    // FormsModule,
    AppComponent,
    SignupComponent,
    LoginPageComponent,
    ReviewPageComponent,
    SignupNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
