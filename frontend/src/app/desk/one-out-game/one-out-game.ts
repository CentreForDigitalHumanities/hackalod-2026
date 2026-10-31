import { Component, output, signal, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Levelstate } from '../../services/levelstate';
import { map, switchMap } from 'rxjs';
import { Art } from '../../models/question';
import { faMagnifyingGlass, faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'hl-one-out-game',
    imports: [AsyncPipe, FontAwesomeModule],
    templateUrl: './one-out-game.html',
    styleUrl: './one-out-game.scss',
})
export class OneOutGame {
    levelState = inject(Levelstate);

    oneoutQuestion$ = this.levelState.oneoutQuestion$;

    // two common works plus the original picture
    private nCommonWorks = 3;

    commonWorks$ = this.levelState.oneOutCommonWorks$;
    oneoutWork$ = this.levelState.oneOutWork$;

    rows = [0, 1];
    cols = [0, 1];

    // random index between 0 and nCommonWorks (inclusive)
    correct = Math.floor(Math.random() * (this.nCommonWorks + 1));

    getWork(
        index: number,
        commonWorks: Art[],
        oneoutWork: Art | null | undefined,
    ): Art | null | undefined {
        if (index === this.correct) {
            return oneoutWork;
        }
        return commonWorks[index < this.correct ? index : index - 1];
    }

    faMagnifyingGlass = faMagnifyingGlass;
    faRefresh = faRefresh;

    magnifyMode = signal<boolean>(false);

    completed = output<void>();
    isComplete = signal<boolean>(false);
    focus = output<Art>();

    wrongGuesses = signal<number[]>([]);

    onSelect(index: number, work: Art) {
        if (this.magnifyMode()) {
            this.focus.emit(work);
        } else {
            if (index == this.correct) {
                this.isComplete.set(true);
                setTimeout(() => {
                    this.completed.emit();
                }, 500);
            } else {
                this.wrongGuesses.update((value) => value.concat([index]));
            }
        }
    }

    refreshWorks() {
        this.levelState.refreshOneOutWorks();
    }
}
