import React, { createContext, useState, FC } from "react";
import { CandidatesContextState, Filters } from "./types";

const contextDefaultValues: CandidatesContextState = {
    candidates: [],
    setNewCandidatesCurrentFilters: () => { },
};

export const FiltersContext = createContext<CandidatesContextState>(
    contextDefaultValues
);

const FiltersContextProvider: FC = ({ children }) => {
    const [candidates, setCandidates] = useState<string[]>(contextDefaultValues.candidates);

    const setNewCandidatesCurrentFilters = ({technologies, experiences}: Filters) => {
        console.log('technologics', technologies)
        console.log('experiences', experiences)
    };

    return (
        <FiltersContext.Provider
            value={{
                candidates,
                setNewCandidatesCurrentFilters
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
};

export default FiltersContextProvider;
