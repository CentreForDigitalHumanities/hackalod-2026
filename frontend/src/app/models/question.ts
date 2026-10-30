import { Observable, of } from "rxjs"

export type Art = {
    url: string,
}

export type DescribeQuestion = {
    id: number;
    target_work: Art;
    ic_code: string;
    label: string;
    keywords: string;
};

export type OneOutQuestion = {
    id: number;
    label: string;
    target_ic_code: string;
    context_ic_code: string;
    hint: string;
};
