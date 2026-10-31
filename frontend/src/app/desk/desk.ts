import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Levelstate } from '../services/levelstate';
import { CommonModule } from '@angular/common';
import { DescribeGame } from './describe-game/describe-game';
import { TargetArt } from '../models/question';
import { OneOutGame } from './one-out-game/one-out-game';
import { NgbDropdown, NgbDropdownButtonItem, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'hl-desk',
    imports: [
    RouterLink, FontAwesomeModule, CommonModule, DescribeGame,
    OneOutGame,
    NgbDropdown, NgbDropdownToggle, NgbDropdownButtonItem, NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle
],
    templateUrl: './desk.html',
    styleUrl: './desk.scss',
})
export class Desk {
    faArrowLeft = faArrowLeft;
    faArrowRight = faArrowRight;
    faArrowDown = faArrowDown;

    levelState = inject(Levelstate);
    question$ = this.levelState.describeQuestion$;
    stage$ = this.levelState.stage$;

    focus = signal<TargetArt | null>(null);

    stages = [
        'Beschrijven',
        'Vergelijken',
    ];

    setStage(value: number) {
        this.stage$.next(value);
    }
}
