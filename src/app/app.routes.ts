import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { Main } from './main/main';
import { MainAdmin } from './main-admin/main-admin';
import { GameDetail } from './game-detail/game-detail';
import { Cart } from './cart/cart';
import { Wallet } from './wallet/wallet';
import { Library } from './library/library';
import { AddGame } from './add-game/add-game';
import { EditGame } from './edit-game/edit-game';

export const routes: Routes = [
     { path: '', component: Main },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'profile', component: Profile },
    { path: 'mainadmin', component: MainAdmin },
    { path: 'game/:id', component: GameDetail },
    { path: 'cart', component: Cart },
    { path: 'wallet', component: Wallet },
    { path: 'library', component: Library },
    { path: 'admin/add-game', component: AddGame },
    { path: 'admin/edit-game', component: EditGame },
];
