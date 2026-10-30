import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Artwork } from './artwork/artwork';
import { KeywordInput } from './keyword-input/keyword-input';
import { Levelstate } from '../services/levelstate';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'hl-gallery',
    imports: [
        CommonModule, Artwork, KeywordInput, RouterLink, FontAwesomeModule,
        NgbTooltip,
    ],
    templateUrl: './gallery.html',
    styleUrl: './gallery.scss',
})
export class Gallery {
    levelState = inject(Levelstate);
    question$ = this.levelState.question$;
    works$ = this.levelState.works$;

    faArrowRight = faArrowRight;

    onSucces() {
        this.levelState.solved$.next();
        setTimeout(() => {
            alert('Het is je gelukt!')
        }, 500)
    }
}
