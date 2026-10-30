import { Component, inject } from '@angular/core';
import { Levelstate } from '../../services/levelstate';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'hl-level-select',
    imports: [
    CommonModule,
    FontAwesomeModule,
    NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem,
    RouterLink
],
    templateUrl: './level-select.html',
    styleUrl: './level-select.scss',
})
export class LevelSelect {
    levelState = inject(Levelstate);
    level = this.levelState.level;
    options$ = this.levelState.allQuestions$;
    faArrowUp = faArrowUp;

    onSelect(value: number) {
        this.levelState.level.set(value);
    }
}
