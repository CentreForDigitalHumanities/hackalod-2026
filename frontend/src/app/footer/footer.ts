import { Component,  signal } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
    selector: 'hl-footer',
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
    imports: [CommonModule]
})
export class Footer {
    public environment = signal(environment);

}
