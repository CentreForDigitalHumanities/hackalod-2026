import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordInput } from './keyword-input';

describe('KeywordInput', () => {
    let component: KeywordInput;
    let fixture: ComponentFixture<KeywordInput>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [KeywordInput],
        }).compileComponents();

        fixture = TestBed.createComponent(KeywordInput);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
