import { AuthService } from './auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SecurePageComponent } from './secure-page/secure-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: "register", component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  {path:'secure',component:SecurePageComponent ,canActivate: [AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
