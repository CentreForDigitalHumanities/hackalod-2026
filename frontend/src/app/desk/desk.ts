import { Component, inject, signal, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Levelstate } from '../services/levelstate';
import { CommonModule } from '@angular/common';
import { DescribeGame } from './describe-game/describe-game';
import { Art, TargetArt } from '../models/question';
import { OneOutGame } from './one-out-game/one-out-game';
import { NgbDropdown, NgbDropdownButtonItem, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'hl-desk',
    imports: [
    RouterLink, FontAwesomeModule, CommonModule, DescribeGame,
    OneOutGame,
    NgbDropdown, NgbDropdownToggle, NgbDropdownButtonItem, NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
],
    templateUrl: './desk.html',
    styleUrl: './desk.scss',
})
export class Desk {
    faArrowLeft = faArrowLeft;
    faArrowRight = faArrowRight;
    faArrowDown = faArrowDown;
    modalService = inject(NgbModal);

    levelState = inject(Levelstate);
    question$ = this.levelState.describeQuestion$;
    stage$ = this.levelState.stage$;

    focus = signal<TargetArt | Art | null>(null);

    stages = [
        'Beschrijven',
        'Vergelijken',
    ];

    onSuccess(modalContent: TemplateRef<any>, stage: number) {
        this.modalService.open(modalContent);
    }

    setStage(value: number) {
        this.stage$.next(value);
    }

    getURL(focused: Art | TargetArt): string {
        return (focused as any).image_url || (focused as any).url;
    }
}
