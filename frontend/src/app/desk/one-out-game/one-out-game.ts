import { Component, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'hl-one-out-game',
    imports: [FontAwesomeModule],
    templateUrl: './one-out-game.html',
    styleUrl: './one-out-game.scss',
})
export class OneOutGame {
    rows = [0, 1];
    cols = [0, 1];

    correct = 2;

    faMagnifyingGlass = faMagnifyingGlass;

    magnifyMode = signal<boolean>(false);

    completed = output<void>();

    wrongGuesses = signal<number[]>([]);

    onSelect(index: number) {
        if (index == this.correct) {
            this.completed.emit();
        } else {
            this.wrongGuesses.update((value) => value.concat([index]));
        }
    }
}
