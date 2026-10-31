import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { About } from './about/about';
import { Library } from './library/library';
import { Desk } from './desk/desk';
import { Portrait } from './portrait/portrait';

const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'bureau',
        component: Desk,
    },
    {
        path: 'galerij',
        component: Gallery,
    },
    {
        path: 'bibliotheek',
        component: Library,
    },
    {
        path: 'portret',
        component: Portrait,
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
