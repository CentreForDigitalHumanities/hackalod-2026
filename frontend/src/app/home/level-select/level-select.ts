import { Component, inject } from '@angular/core';
import { Levelstate } from '../../services/levelstate';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hl-level-select',
    imports: [
        CommonModule,
        NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem
    ],
    templateUrl: './level-select.html',
    styleUrl: './level-select.scss',
})
export class LevelSelect {
    levelState = inject(Levelstate);
    level = this.levelState.level;
    options$ = this.levelState.allQuestions$;

    onSelect(value: number) {
        this.levelState.level.set(value);
    }
}
