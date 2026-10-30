import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Artwork } from './artwork/artwork';
import { KeywordInput } from './keyword-input/keyword-input';
import { Levelstate } from '../services/levelstate';

@Component({
    selector: 'hl-gallery',
    imports: [CommonModule, Artwork, KeywordInput, RouterLink],
    templateUrl: './gallery.html',
    styleUrl: './gallery.scss',
})
export class Gallery {
    levelState = inject(Levelstate);
    question$ = this.levelState.question$;

    onSucces() {
        this.levelState.solved$.next();
        setTimeout(() => {
            alert('Het is je gelukt!')
        }, 500)
    }
}
