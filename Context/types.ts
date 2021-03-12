export interface Filters {
    filtersTechnologicSelected: string[],
    filtersExperienceSelected?: string[],
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
        filterMainTech: string
    };
    loader: boolean,
    setNewCandidatesCurrentFilters: ({filtersTechnologicSelected, filtersExperienceSelected, filtersLocalizationsSelected}: Filters ) => void;
};
  