import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Level } from './level/level';

const routes: Routes = [
    {
        path: 'home',
        component: Home,
        title: 'HackaLOD'
    },
    {
        path: 'vraag/:id',
        component: Level,
        title: 'HackaLOD',
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    }
];

export { routes };
