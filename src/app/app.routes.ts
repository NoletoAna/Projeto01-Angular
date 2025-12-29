import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { AuthLayout } from './core/layout/auth-layout/auth-layout';
import { MainLayout } from './core/layout/main-layout/main-layout';
import { DashboardComponent } from './features/dashboard-component/dashboard-component';
import { LibraryComponent } from './features/library-component/library-component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'library', component: LibraryComponent },
      { path: '', redirectTo: 'library', pathMatch: 'full' }
    ]
  },
];
