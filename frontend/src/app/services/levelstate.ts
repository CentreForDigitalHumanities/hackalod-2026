import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
    BehaviorSubject,
    combineLatest,
    distinctUntilChanged,
    map,
    of,
    shareReplay,
    startWith,
    Subject,
    switchMap,
    tap,
    withLatestFrom,
} from 'rxjs';
import { Api } from './api';

@Injectable({
    providedIn: 'root',
})
export class Levelstate {
    api = inject(Api);
    allCasussen$ = this.api.getCasussen().pipe(shareReplay(1));

    level = signal<number>(1);
    casus$ = combineLatest([this.allCasussen$, toObservable(this.level)]).pipe(
        map(([cassusen, id]) => cassusen.find((q) => q.id === id)),
        distinctUntilChanged(),
        // reset the stage only when the casus actually changes, not on every new subscriber
        tap(() => this.stage$.next(1)),
        shareReplay(1),
    );

    describeQuestion$ = this.casus$.pipe(
        map((casus) => casus?.question1),
        shareReplay(1),
    );

    oneoutQuestion$ = this.casus$.pipe(
        map((casus) => casus?.question2),
        shareReplay(1),
    );

    private oneOutRefresh$ = new Subject<void>();
    private oneOutQuestionRefreshed$ = combineLatest([
        this.oneoutQuestion$,
        this.oneOutRefresh$.pipe(startWith(undefined)),
    ]).pipe(map(([question]) => question));

    oneOutWork$ = this.oneOutQuestionRefreshed$.pipe(
        switchMap((question) => this.api.getIconclassWorks(question?.context_ic_code ?? '', 1)),
        map((works) => works[0]),
    );

    // two works sharing the target iconclass code, plus the original picture, in random order
    oneOutCommonWorks$ = this.oneOutQuestionRefreshed$.pipe(
        switchMap((question) => this.api.getIconclassWorks(question?.target_ic_code ?? '', 2)),
        withLatestFrom(this.describeQuestion$),
        map(([works, describeQuestion]) => {
            const original = describeQuestion?.target_work;
            const all = original ? works.concat([{ url: original.image_url }]) : works;
            return all
                .map((work) => ({ work, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ work }) => work);
        }),
    );

    refreshOneOutWorks() {
        this.oneOutRefresh$.next();
    }

    works$ = this.describeQuestion$.pipe(
        switchMap((question) => (question ? this.api.getIconclassWorks(question.ic_code) : of([]))),
        shareReplay(1),
    );
    stage$ = new BehaviorSubject<number>(1);

    allBooks$ = this.api.getLibraryBooks().pipe(shareReplay(1));

    libraryBooks$ = combineLatest([this.casus$, this.stage$, this.allBooks$]).pipe(
        map(([casus, stage, allBooks]) => {
            return allBooks.filter((book) => {
                return book.casus === casus?.id && book.game === stage;
            });
        }),
    );

    nextStage() {
        this.stage$.next(this.stage$.value + 1);
    }
}
