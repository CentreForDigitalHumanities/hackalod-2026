import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'hl-portrait',
    imports: [RouterLink, FontAwesomeModule],
    templateUrl: './portrait.html',
    styleUrl: './portrait.scss',
})
export class Portrait {
    faArrowDown = faArrowDown;
}
