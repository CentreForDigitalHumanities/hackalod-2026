import { TestBed } from '@angular/core/testing';

import { Levelstate } from './levelstate';

describe('Levelstate', () => {
    let service: Levelstate;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Levelstate);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
