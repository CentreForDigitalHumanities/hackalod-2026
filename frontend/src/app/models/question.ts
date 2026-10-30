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
            url: 'https://commons.wikimedia.org/wiki/File:CH.ZG.Walchwil_Walchwilerberg_Heumoosegg_2016-10-30_OrigX-R_gp.jpg'
        },
        {
            url: 'https://commons.wikimedia.org/wiki/File:Rhynchophorus_ferrugineus_(pupa)-2.jpg',
        },
        {
            url: 'https://commons.wikimedia.org/wiki/File:Natuurgebied_Petgatten_De_Feanhoop._19-10-2020._(actm.)_32.jpg',
        },
    ],
    tag: {
        keywords: ['bos', 'bomen', 'woud']
    }
}

export const getQuestion = (id: string): Observable<Question> => {
    return of(exampleQuestion);
}
