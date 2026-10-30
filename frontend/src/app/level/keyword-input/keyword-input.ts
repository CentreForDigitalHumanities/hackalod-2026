import { Component, input } from '@angular/core';
import { Tag } from '../../models/question';

@Component({
    selector: 'hl-keyword-input',
    imports: [],
    templateUrl: './keyword-input.html',
    styleUrl: './keyword-input.scss',
})
export class KeywordInput {
    tag = input.required<Tag>();
}
