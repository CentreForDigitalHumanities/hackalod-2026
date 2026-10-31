import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, map, of, shareReplay, startWith, Subject, switchMap } from 'rxjs';
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

    oneOutWork$ = this.oneoutQuestion$.pipe(
        switchMap((question) => this.api.getIconclassWorks(question?.context_ic_code ?? '', 1)),
        map((works) => works[0]),
    );

    oneOutCommonWorks$ = this.oneoutQuestion$.pipe(
        switchMap((question) => this.api.getIconclassWorks(question?.target_ic_code ?? '', 3)),
    );

    works$ = this.describeQuestion$.pipe(
        switchMap((question) => (question ? this.api.getIconclassWorks(question.ic_code) : of([]))),
        shareReplay(1),
    );
    stage$ = new BehaviorSubject<number>(1);

    nextStage() {
        this.stage$.next(this.stage$.value + 1);
    }
}
