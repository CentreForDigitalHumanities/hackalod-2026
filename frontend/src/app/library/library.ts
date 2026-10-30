import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'hl-library',
    imports: [RouterLink, NgbTooltip, FontAwesomeModule],
    templateUrl: './library.html',
    styleUrl: './library.scss',
})
export class Library {
    faArrowLeft = faArrowLeft;
}
