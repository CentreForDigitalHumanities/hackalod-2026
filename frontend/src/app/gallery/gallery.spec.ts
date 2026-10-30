import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery } from './gallery';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Level', () => {
    let component: Gallery;
    let fixture: ComponentFixture<Gallery>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Gallery],
            providers: [
                provideRouter([]),
                provideHttpClient(),
                provideHttpClientTesting(),
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(Gallery);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
