import { Component } from '@angular/core';

@Component({
    selector: 'hl-one-out-game',
    imports: [],
    templateUrl: './one-out-game.html',
    styleUrl: './one-out-game.scss',
})
export class OneOutGame {
    rows = [0, 1];
    cols = [0, 1];

    correct = 2;

    onSelect(index: number) {
        if (index == this.correct) {
            console.log('yay!')
        } else {
            console.log('nay!');
        }
    }
}
