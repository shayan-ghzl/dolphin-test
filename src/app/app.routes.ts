import { Routes } from '@angular/router';
import { CarsListComponent } from './pages/cars-list/cars-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: 'cars-list', component: CarsListComponent },
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
];
