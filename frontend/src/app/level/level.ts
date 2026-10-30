import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Artwork } from './artwork/artwork';
import { KeywordInput } from './keyword-input/keyword-input';
import { Levelstate } from '../services/levelstate';

@Component({
    selector: 'hl-level',
    imports: [CommonModule, Artwork, KeywordInput, RouterLink],
    templateUrl: './level.html',
    styleUrl: './level.scss',
})
export class Level {
    levelState = inject(Levelstate);
    question$ = this.levelState.question$;

    onSucces() {
        setTimeout(() => {
            alert('Het is je gelukt!')
        }, 500)
    }
}
