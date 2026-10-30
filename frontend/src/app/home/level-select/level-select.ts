import { Component, inject } from '@angular/core';
import { Levelstate } from '../../services/levelstate';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'hl-level-select',
    imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem],
    templateUrl: './level-select.html',
    styleUrl: './level-select.scss',
})
export class LevelSelect {
    levelState = inject(Levelstate);
    level = this.levelState.level;
    levelOptions = [1,2,3,4,5];

    onSelect(value: number) {
        this.levelState.level.set(value);
    }
}
