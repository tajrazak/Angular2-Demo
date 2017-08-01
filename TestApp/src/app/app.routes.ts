import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StartComponent } from './start/start.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { 
    path: 'start',
    component: StartComponent,
    children:[
       { path: '', redirectTo: 'login', pathMatch: 'full' },
       { path: 'login', component: LoginComponent },
       { path: 'signup', component: SignupComponent }
    ]
 },
  { path: 'dashboard', component: DashboardComponent }
];


