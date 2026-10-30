import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { getQuestion } from '../models/question';
import { CommonModule } from '@angular/common';
import { Artwork } from './artwork/artwork';
import { KeywordInput } from './keyword-input/keyword-input';

@Component({
    selector: 'hl-level',
    imports: [CommonModule, Artwork, KeywordInput],
    templateUrl: './level.html',
    styleUrl: './level.scss',
})
export class Level {
    activatedRoute = inject(ActivatedRoute);
    id$ = this.activatedRoute.paramMap.pipe(
        map(params => params.get('id')),
    );
    question$ = this.id$.pipe(
        filter(id => !!id),
        switchMap(id => getQuestion(id || '')),
    );
}
