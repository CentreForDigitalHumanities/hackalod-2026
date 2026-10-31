import { Component, inject, input, output } from '@angular/core';
import { Levelstate } from '../../services/levelstate';
import { DescribeQuestion, TargetArt } from '../../models/question';
import { KeywordInput } from '../keyword-input/keyword-input';

@Component({
    selector: 'hl-describe-game',
    imports: [KeywordInput],
    templateUrl: './describe-game.html',
    styleUrl: './describe-game.scss',
})
export class DescribeGame {
    levelState = inject(Levelstate);
    question = input.required<DescribeQuestion>();

    focus = output<TargetArt>();

    onCompleted() {
        setTimeout(() => {
            alert('Yay!');
            this.levelState.nextStage();
        }, 500);
    }
}
