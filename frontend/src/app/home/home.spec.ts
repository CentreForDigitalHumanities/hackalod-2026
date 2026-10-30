import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Home } from './home';
import { provideRouter } from '@angular/router';

describe('Home', () => {
    let component: Home;
    let fixture: ComponentFixture<Home>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClientTesting(), provideRouter([])],
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
