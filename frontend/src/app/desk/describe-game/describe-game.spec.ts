import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeGame } from './describe-game';

describe('DescribeGame', () => {
    let component: DescribeGame;
    let fixture: ComponentFixture<DescribeGame>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DescribeGame],
        }).compileComponents();

        fixture = TestBed.createComponent(DescribeGame);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
