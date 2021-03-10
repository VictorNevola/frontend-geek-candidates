export interface Filters {
    technologies: string[],
    experiences?: string[]
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
    filtersDefined: boolean;
    setNewCandidatesCurrentFilters: ({technologies, experiences}: Filters ) => void;
};
  