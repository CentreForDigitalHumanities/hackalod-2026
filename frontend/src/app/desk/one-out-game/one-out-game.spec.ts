import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOutGame } from './one-out-game';

describe('OneOutGame', () => {
    let component: OneOutGame;
    let fixture: ComponentFixture<OneOutGame>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OneOutGame],
        }).compileComponents();

        fixture = TestBed.createComponent(OneOutGame);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
