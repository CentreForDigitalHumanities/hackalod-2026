import { Component, inject, input, output, signal } from '@angular/core';
import { Levelstate } from '../../services/levelstate';
import { DescribeQuestion, TargetArt } from '../../models/question';
import { KeywordInput } from '../keyword-input/keyword-input';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'hl-describe-game',
    imports: [KeywordInput, FontAwesomeModule, NgbTooltip],
    templateUrl: './describe-game.html',
    styleUrl: './describe-game.scss',
})
export class DescribeGame {
    levelState = inject(Levelstate);
    question = input.required<DescribeQuestion>();

    magnifyMode = signal<boolean>(false);
    focus = output<TargetArt>();

    faMagnifyingGlass = faMagnifyingGlass;

    onCompleted() {
        setTimeout(() => {
            alert('Yay!');
            this.levelState.nextStage();
        }, 500);
    }
}
