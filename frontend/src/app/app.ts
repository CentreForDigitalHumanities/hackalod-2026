import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { ToastContainer } from './toast-container/toast-container';


@Component({
    selector: 'hl-root',
    imports: [
        RouterOutlet,
        Menu,
        ToastContainer
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    private document = inject(DOCUMENT);

    constructor() {
        const style = this.document.createElement('link');
        style.rel = 'stylesheet';
        this.document.head.append(style);
    }

}
