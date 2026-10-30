import { Component, computed, input, } from '@angular/core';
import { DescribeQuestion } from '../../models/question';
import { delay, of, scan, startWith, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hl-keyword-input',
    imports: [CommonModule],
    templateUrl: './keyword-input.html',
    styleUrl: './keyword-input.scss',
})
export class KeywordInput {
    question = input.required<DescribeQuestion>();
    keywords = computed(() => this.question().keywords);

    guessed$ = new Subject<string>();

    showSuccess$ = this.guessed$.pipe(
        switchMap(() => of(false).pipe(
            delay(1000),
            startWith(true),
        )),
    );

    keywordsGuessed$ = this.guessed$.pipe(
        scan((acc, curr) => [...acc, curr], [] as string[]),
    )

    onInputChange(value: string, element: HTMLInputElement) {
        const keywords = this.keywords();
        for (let keyword of Object.keys(keywords)) {
            const options = keywords[keyword];
            for (let option of options) {
                if (this.matchesKeyword(value, option)) {
                    this.guessed$.next(option);
                    setTimeout(() => element.value = '', 1000);
                }
            }
        }
    }

    private matchesKeyword(value: string, keyword: string): boolean {
        return value.toLowerCase() == keyword.toLowerCase();
    }
}
