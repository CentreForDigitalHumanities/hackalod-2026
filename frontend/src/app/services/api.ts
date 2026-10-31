import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Art, Casus, DescribeQuestion, OneOutQuestion } from '../models/question';

@Injectable({
    providedIn: 'root',
})
export class Api {
    constructor(private http: HttpClient) {}

    getDescribeQuestions(): Observable<DescribeQuestion[]> {
        return this.http.get<DescribeQuestion[]>('/api/describe-questions/');
    }

    getOneOutQuestions(): Observable<OneOutQuestion[]> {
        return this.http.get<OneOutQuestion[]>('/api/one-out-questions/');
    }

    getCasussen(): Observable<Casus[]> {
        return this.http.get<Casus[]>('/api/casussen/');
    }

    getIconclassWorks(icCode: string, n?: number): Observable<Art[]> {
        return this.http.get<Art[]>(`/api/datasets/iconclass/${icCode}/images`, {
            params: n ? { n } : {},
        });
    }
}
