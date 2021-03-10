import React, { createContext, useState, FC } from "react";
import { CandidatesContextState, Filters, Candidate } from "./types";
import api from '../services/api';
import axios from "axios";
import { use } from "chai";

const contextDefaultValues: CandidatesContextState = {
    candidates: [],
    filtersDefined: false,
    setNewCandidatesCurrentFilters: () => { },
};

export const CandidatesContext = createContext<CandidatesContextState>(
    contextDefaultValues
);

const CandidatesContextProvider: FC = ({ children }) => {
    const [candidates, setCandidates] = useState<Candidate[]>(contextDefaultValues.candidates);
    const [filtersDefined, setFiltersDefined] = useState<boolean>();

    const setNewCandidatesCurrentFilters = async ({technologies, experiences}: Filters) => {
        const dataPayload = {
            filtersTechnologies: technologies,
            filtersExperienceYears: experiences
        }
        const filtersCandidates: Candidate[] = await api.post('api/filterCandidates', dataPayload).then(data => data.data);
        const setPhotoUsers = filtersCandidates?.map( async candidate => {
            const randomUserInfos = await axios.get('https://randomuser.me/api/').then(data => data.data);
            const {picture: {medium}} = randomUserInfos.results[0];
            candidate.photoUserUrl = medium;
            return candidate;
        });

        setFiltersDefined(true);

        await Promise.all(setPhotoUsers);

        setCandidates(filtersCandidates);
    };

    return (
        <CandidatesContext.Provider
            value={{
                candidates,
                filtersDefined,
                setNewCandidatesCurrentFilters
            }}
        >
            {children}
        </CandidatesContext.Provider>
    );
};

export default CandidatesContextProvider;
