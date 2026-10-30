import { Component, input, signal } from '@angular/core';
import { Tag } from '../../models/question';

@Component({
    selector: 'hl-keyword-input',
    imports: [],
    templateUrl: './keyword-input.html',
    styleUrl: './keyword-input.scss',
})
export class KeywordInput {
    tag = input.required<Tag>();

    guessed = signal<boolean>(false);

    onInputChange(value: string) {
        console.log(value);
        for (let keyword of this.tag().keywords) {
            if (this.matchesKeyword(value, keyword)) {
                this.guessed.set(true);
                break;
            }
        }
    }

    private matchesKeyword(value: string, keyword: string): boolean {
        return value.toLowerCase() == keyword.toLowerCase();
    }
}
