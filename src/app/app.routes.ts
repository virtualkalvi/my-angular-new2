import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashbord } from './dashbord/dashbord';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

export const routes: Routes = [
     { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashbord},

];
