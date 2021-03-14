export interface Filters {
    filtersTechnologicSelected: string[],
    filtersExperienceMinValue?: number,
    filtersLocalizationsSelected?: string[]
}

export interface Candidate {
    id: number,
    city: string,
    experience: string,
    photoUserUrl: string,
    technologies: [{
        name: string,
        is_main_tech: boolean
    }]    
}

export interface CandidatesContextState {
    candidates: Candidate[];
    filtersDefined: {
        defined: boolean,
        moreOneFilterTech: boolean,
        filterMainTech: string
    };
    loader: boolean,
    setNewCandidatesCurrentFilters: ({filtersTechnologicSelected, filtersExperienceMinValue, filtersLocalizationsSelected}: Filters ) => void;
};
  