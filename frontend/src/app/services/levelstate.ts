import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { map, shareReplay, switchMap } from 'rxjs';
import { getQuestion } from '../models/question';

@Injectable({
    providedIn: 'root',
})
export class Levelstate {
    level = signal<number>(1);
    question$ = toObservable(this.level).pipe(
        map(value => `${value}`),
        switchMap(id => getQuestion(id)),
        shareReplay(1),
    );
}
