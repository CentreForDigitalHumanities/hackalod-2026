import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'hl-desk',
    imports: [RouterLink, FontAwesomeModule],
    templateUrl: './desk.html',
    styleUrl: './desk.scss',
})
export class Desk {
    faArrowLeft = faArrowLeft;
    faArrowRight = faArrowRight;
}
