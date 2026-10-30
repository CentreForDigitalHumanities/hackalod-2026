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
