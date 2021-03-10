export interface Filters {
    technologies: string[],
    experiences?: string[]
}

export interface CandidatesContextState {
    candidates: string[];
    setNewCandidatesCurrentFilters: ({technologies, experiences}: Filters ) => void;
};
  