import { Component, computed, input, output, } from '@angular/core';
import { DescribeQuestion } from '../../models/question';
import { combineLatest, delay, filter, map, of, scan, startWith, Subject, switchMap, withLatestFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

@Component({
    selector: 'hl-keyword-input',
    imports: [CommonModule],
    templateUrl: './keyword-input.html',
    styleUrl: './keyword-input.scss',
})
export class KeywordInput {
    question = input.required<DescribeQuestion>();
    keywords = computed(() => this.question().keywords);
    keywords$ = toObservable(this.keywords);

    input$ = new Subject<[string, HTMLInputElement]>();

    guessed$ = new Subject<string>();

    showSuccess$ = this.guessed$.pipe(
        switchMap(() => of(false).pipe(
            delay(1000),
            startWith(true),
        )),
    );

    keywordsGuessed$ = this.guessed$.pipe(
        scan((acc, curr) => [...acc, curr], [] as string[]),
        startWith([]),
    );

    complete$ = combineLatest([this.keywords$, this.keywordsGuessed$]).pipe(
        filter(([all, guessed]) => this.allGuessed(Object.keys(all), guessed)),
    )

    completed = output<void>();

    constructor() {
        this.input$.pipe(
            withLatestFrom(this.keywordsGuessed$),
            takeUntilDestroyed(),
        ).subscribe(([[value, element], guessed]) =>
            this.checkInput(value, element, guessed)
        );

        this.complete$.pipe(
            takeUntilDestroyed(),
        ).subscribe(() => this.completed.emit());
    }

    onInputChange(value: string, element: HTMLInputElement) {
        this.input$.next([value, element]);
    }

    private checkInput(
        value: string, element: HTMLInputElement,
        alreadyGuessed: string[]
    ) {
        const keywords = this.keywords();
        for (let keyword of Object.keys(keywords)) {
            if (!alreadyGuessed.includes(keyword)) {
                const options = [keyword, ...keywords[keyword]];
                for (let option of options) {
                    if (this.matchesKeyword(value, option)) {
                        this.guessed$.next(keyword);
                        setTimeout(() => element.value = '', 500);
                    }
                }
            }
        }

    }

    private matchesKeyword(value: string, keyword: string): boolean {
        return value.toLowerCase() == keyword.toLowerCase();
    }

    private allGuessed(all: string[], guessed: string[]): boolean {
        return !!all.length && all.length == guessed.length;
    }
}
