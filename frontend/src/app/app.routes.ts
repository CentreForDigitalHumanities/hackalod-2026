import { Routes } from '@angular/router';
import { Home } from './home/home';

const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    }
];

export { routes };
