import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Level } from './level/level';
import { About } from './about/about';

const routes: Routes = [
    {
        path: 'home',
        component: Home,
        title: 'HackaLOD'
    },
    {
        path: 'galerij',
        component: Level,
        title: 'HackaLOD',
    },
    {
        path: 'over',
        component: About,
        title: 'HackaLOD',
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    }
];

export { routes };
