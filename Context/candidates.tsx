import React, { createContext, useState, FC } from "react";
import { CandidatesContextState, Filters, Candidate } from "./types";
import api from '../services/api';
import axios from "axios";

const contextDefaultValues: CandidatesContextState = {
    candidates: [],
    filtersDefined: {
        defined: false,
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
    const [filtersDefined, setFiltersDefined] = useState<{defined: boolean  , filterMainTech: string}>();
    const [loader, setLoader] = useState<boolean>(false);

    const setNewCandidatesCurrentFilters = async ({filtersTechnologicSelected, filtersExperienceSelected, filtersLocalizationsSelected}: Filters) => {
        
        setLoader(true);

        const dataPayload = {
            filtersTechnologies: filtersTechnologicSelected,
            filtersExperienceYears: filtersExperienceSelected,
            filterLocalizations: filtersLocalizationsSelected
        }
        const filtersCandidates: Candidate[] = await api.post('api/filterCandidates', dataPayload).then(data => data.data);
        const setPhotoUsers = filtersCandidates?.map( async candidate => {
            const randomUserInfos = await axios.get('https://randomuser.me/api/').then(data => data.data);
            const {picture: {medium}} = randomUserInfos.results[0];
            candidate.photoUserUrl = medium;
            return candidate;
        });

        
        await Promise.all(setPhotoUsers);
        setCandidates(filtersCandidates);
        setFiltersDefined({
            defined: true,
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
