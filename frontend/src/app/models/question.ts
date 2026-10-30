import { Observable, of } from "rxjs"

export type Art = {
    url: string,
}

export type Question = {
    id: number,
    works: Art[],
    ic_code: string,
    label: string,
    keywords: string,
}
