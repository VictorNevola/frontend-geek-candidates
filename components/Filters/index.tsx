import { Aside, FilterInfos, H2, Ul, Li, FiltersOptions, Label, InputCheckbox, SpanCheckbox, BtnActionFilter } from './styles'
import { IFiltersAvailbles } from '../../pages/types';
import { FiltersContext } from '../../Context/filter';
import React, { useCallback, useContext, useState } from 'react';

export const Filters = ({ experiences, technologies }: IFiltersAvailbles) => {
    const { candidates, setNewCandidatesCurrentFilters } = useContext(FiltersContext);

    const setFiltersTechnologic = new Set<string>();
    const setFiltersExperience = new Set<string>();
    const [filtersTechnologicSelected, setFiltersTechnologicSelected] = useState<string[]>([]);
    const [filtersExperienceSelected, setFiltersExperienceSelected] = useState<string[]>([]);

    const handlerFiltersTechnologic = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        const inputValue = input.dataset.filter;
        const inputRef = input.dataset.ref;

        if (inputRef == 'technologic') {

            if (setFiltersTechnologic.has(inputValue)) {
                setFiltersTechnologic.delete(inputValue);
            } else {
                setFiltersTechnologic.add(inputValue)
            }

            return setFiltersTechnologicSelected(Array.from(setFiltersTechnologic.values()))
        }

        if (inputRef == 'experience') {

            if (setFiltersExperience.has(inputValue)) {
                setFiltersExperience.delete(inputValue);
            } else {
                setFiltersExperience.add(inputValue)
            }

            return setFiltersExperienceSelected(Array.from(setFiltersExperience.values()))
        }

    }, []);

    const handlerSubmit = () => {
        const technologies = filtersTechnologicSelected;
        const experiences = filtersExperienceSelected;
        
        setNewCandidatesCurrentFilters({technologies, experiences})
    }

    return (
        <Aside>

            <div>{candidates.length}</div>

            <FilterInfos> FILTRE 🔍 </FilterInfos>

            <FiltersOptions>
                <H2>Tecnologias</H2>
                <Ul>
                    {
                        technologies.map((tecnologic, index) => {
                            // return <Li> {tecnologic.name} ({tecnologic.count}) </Li>
                            return (
                                <Li key={index}>
                                    <Label>
                                        {tecnologic.name} ({tecnologic.count})
                                            <InputCheckbox data-filter={tecnologic.name} data-ref="technologic" type="checkbox" onChange={(e) => handlerFiltersTechnologic(e)} />
                                        <SpanCheckbox />
                                    </Label>
                                </Li>
                            )
                        })
                    }
                </Ul>
            </FiltersOptions>

            <FiltersOptions>
                <H2>Tempo de Experiência</H2>
                <Ul>
                    {
                        experiences.map((experience, index) => {
                            return (
                                <Li key={index}>
                                    <Label>
                                        {experience.name.replace('years', 'anos')} ({experience.count})
                                            <InputCheckbox data-filter={experience.name} data-ref="experience" type="checkbox" onChange={(e) => handlerFiltersTechnologic(e)}/>
                                        <SpanCheckbox />
                                    </Label>
                                </Li>
                            )
                        })
                    }
                </Ul>
            </FiltersOptions>

            {
                filtersTechnologicSelected.length > 0 && <BtnActionFilter onClick={() => handlerSubmit()}> Filtrar </BtnActionFilter>
            }

        </Aside>
    )
};