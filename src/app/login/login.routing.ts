import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

export const LoginRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];
