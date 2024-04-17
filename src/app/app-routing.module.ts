import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import path from 'path';
import { SignupNewComponent } from './signup-new/signup-new.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'signupNew',component:SignupNewComponent},

  {path:'loginpage',component:LoginPageComponent},
  {path:'reviewpage',component:ReviewPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
