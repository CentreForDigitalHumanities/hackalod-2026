import { Observable, of } from "rxjs"

export type ArtWork = {
    url: string,
}

export type Tag = {
    keywords: string[],
}

export type Question = {
    id: number,
    works: ArtWork[],
    tag: Tag,
}

const exampleQuestion: Question = {
    id: 1,
    works: [
        {
            url: '/uu-cdh.svg'
        },
        {
            url: '/uu-cdh.svg',
        },
        {
            url: '/uu-cdh.svg',
        },
    ],
    tag: {
        keywords: ['bos', 'bomen', 'woud']
    }
}

export const getQuestion = (id: string): Observable<Question> => {
    return of(exampleQuestion);
}
