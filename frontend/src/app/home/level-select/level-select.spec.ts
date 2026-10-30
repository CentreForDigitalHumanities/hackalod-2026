import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSelect } from './level-select';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('LevelSelect', () => {
    let component: LevelSelect;
    let fixture: ComponentFixture<LevelSelect>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LevelSelect],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LevelSelect);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
