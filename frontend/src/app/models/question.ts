export type Art = {
    url: string,
}

export type TargetArt = {
    id: number,
    image_url: string,
}

export type Keywords = {
    [name: string]: string[],
}

export type DescribeQuestion = {
    id: number;
    target_work: TargetArt;
    ic_code: string;
    label: string;
    keywords: Keywords;
};

export type OneOutQuestion = {
    id: number;
    label: string;
    target_ic_code: string;
    context_ic_code: string;
    hint: string;
};
