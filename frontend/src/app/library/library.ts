import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Levelstate } from '../services/levelstate';
import { CommonModule } from '@angular/common';
import { LibraryBook } from '../models/question';

@Component({
    selector: 'hl-library',
    imports: [RouterLink, NgbTooltip, FontAwesomeModule, CommonModule],
    templateUrl: './library.html',
    styleUrl: './library.scss',
})
export class Library {
    levelState = inject(Levelstate);
    books$ = this.levelState.libraryBooks$;
    faArrowLeft = faArrowLeft;

    showBook(book: LibraryBook) {
        alert(book.html);
    }
}
