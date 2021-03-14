import React, { createContext, useState, FC } from "react";
import { CandidatesContextState, Filters, Candidate } from "./types";
import api from '../services/api';
import axios from "axios";

const contextDefaultValues: CandidatesContextState = {
    candidates: [],
    filtersDefined: {
        defined: false,
        moreOneFilterTech: false,
        filterMainTech: ''
    },
    loader: false,
    setNewCandidatesCurrentFilters: () => { },
};

export const CandidatesContext = createContext<CandidatesContextState>(
    contextDefaultValues
);

const CandidatesContextProvider: FC = ({ children }) => {
    const [candidates, setCandidates] = useState<Candidate[]>(contextDefaultValues.candidates);
    const [filtersDefined, setFiltersDefined] = useState<{defined: boolean, moreOneFilterTech: boolean ,filterMainTech: string}>();
    const [loader, setLoader] = useState<boolean>(false);

    const setNewCandidatesCurrentFilters = async ({filtersTechnologicSelected, filtersExperienceMinValue, filtersLocalizationsSelected}: Filters) => {
        
        setLoader(true);

        const dataPayload = {
            filtersTechnologies: filtersTechnologicSelected,
            filtersExperienceMinNumber: filtersExperienceMinValue,
            filterLocalizations: filtersLocalizationsSelected
        }
        const filtersCandidates: Candidate[] = await api.post('api/filterCandidates', dataPayload).then(data => data.data);

        setCandidates(filtersCandidates);
        setFiltersDefined({
            defined: true,
            moreOneFilterTech: filtersTechnologicSelected.length > 1 ? true : false,
            filterMainTech: filtersTechnologicSelected[0]
        });
        setLoader(false);
    };

    return (
        <CandidatesContext.Provider
            value={{
                candidates,
                filtersDefined,
                loader,
                setNewCandidatesCurrentFilters
            }}
        >
            {children}
        </CandidatesContext.Provider>
    );
};

export default CandidatesContextProvider;
