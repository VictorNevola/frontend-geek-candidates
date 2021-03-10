
export interface technologies {
    count: number,
    name: string
}

export interface experiences {
    count: number,
    name: string
}

export interface IFiltersAvailbles {
    technologies: technologies[],
    experiences: experiences[]
}