import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, map, of, shareReplay, startWith, Subject, switchMap } from 'rxjs';
import { Api } from './api';

@Injectable({
    providedIn: 'root',
})
export class Levelstate {
    api = inject(Api);
    allQuestions$ = this.api.getDescribeQuestions().pipe(
        shareReplay(1),
    );

    level = signal<number>(1);
    question$ = combineLatest([
        this.allQuestions$,
        toObservable(this.level),
    ])
    .pipe(
        map(([questions, id]) => questions.find(q => q.id === id)),
        shareReplay(1),
    );
    works$ = this.question$.pipe(
        switchMap(question => question ? this.api.getIconclassWorks(question.ic_code) : of([])),
        shareReplay(1),
    );
    stage$ = new BehaviorSubject<number>(1);

    nextStage() {
        this.stage$.next(this.stage$.value + 1);
    }
}
