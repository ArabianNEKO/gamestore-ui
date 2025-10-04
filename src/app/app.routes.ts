import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { Main } from './main/main';
import { MainAdmin } from './main-admin/main-admin';

export const routes: Routes = [
     { path: '', component: Main },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'profile', component: Profile },
    { path: 'mainadmin', component: MainAdmin },
];
