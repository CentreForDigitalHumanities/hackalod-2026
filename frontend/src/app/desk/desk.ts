import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { KeywordInput } from './keyword-input/keyword-input';
import { Levelstate } from '../services/levelstate';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hl-desk',
    imports: [RouterLink, FontAwesomeModule, KeywordInput, CommonModule],
    templateUrl: './desk.html',
    styleUrl: './desk.scss',
})
export class Desk {
    faArrowLeft = faArrowLeft;
    faArrowRight = faArrowRight;
    faArrowDown = faArrowDown;

    levelState = inject(Levelstate);
    question$ = this.levelState.question$;

    focus = signal<boolean>(false);

    onCompleted() {
        setTimeout(() => {
            alert('Yay!')
        }, 500);
    }
}
