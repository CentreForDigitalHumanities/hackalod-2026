import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Artwork } from './artwork/artwork';
import { Levelstate } from '../services/levelstate';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Art } from '../models/question';

@Component({
    selector: 'hl-gallery',
    imports: [
        CommonModule, Artwork, RouterLink, FontAwesomeModule,
        NgbTooltip,
    ],
    templateUrl: './gallery.html',
    styleUrl: './gallery.scss',
})
export class Gallery {
    levelState = inject(Levelstate);
    question$ = this.levelState.question$;
    works$ = this.levelState.works$;

    focus = signal<Art | null>(null);

    faArrowRight = faArrowRight;

    rows = [0, 1];
    cols = [0, 1];

    getPicture(works: Art[] | null, index: number): Art | undefined {
        return works?.[index];
    }

    onSucces() {
        this.levelState.solved$.next();
        setTimeout(() => {
            alert('Het is je gelukt!')
        }, 500)
    }
}
