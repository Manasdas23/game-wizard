import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegistrationComponent } from './features/auth/registration/registration.component';

export const routes: Routes = [
    {path : 'dashboard',component : DashboardComponent},
    {path : '',component : DashboardComponent},
    {path : 'login',component : LoginComponent},
    {path : 'registration',component : RegistrationComponent},
];
