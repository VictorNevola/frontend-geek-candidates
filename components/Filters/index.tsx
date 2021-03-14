import { Aside, FilterInfos, H2, Ul, Li, FiltersOptions, Label, InputCheckbox, SpanCheckbox, BtnActionFilter, BtnFilterMobile, BtnCloseFilterMobile, LoaderIcon } from './styles'
import { IFiltersAvailbles } from '../../typings/pages/home';
import { CandidatesContext } from '../../Context/candidates';
import React, { useCallback, useContext, useState } from 'react';

export const Filters = ({ experiences, technologies, localizations }: IFiltersAvailbles) => {
    const { setNewCandidatesCurrentFilters, loader } = useContext(CandidatesContext);
    const [activeFilterMobile, setActiveFilterMobile] = useState(false);

    const setFiltersTechnologic = new Set<string>();
    const setFiltersExperience = new Set<string>();
    const setFiltersLocalization = new Set<string>();
    const [filtersTechnologicSelected, setFiltersTechnologicSelected] = useState<string[]>([]);
    const [filtersExperienceSelected, setFiltersExperienceSelected] = useState<string[]>([]);
    const [filtersLocalizationsSelected, setFiltersLocalizationsSelected] = useState<string[]>([]);

    const handlerFilters = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        const inputValue = input.dataset.filter;
        const inputRef = input.dataset.ref;

        if (inputRef == 'technologic') {
            setFiltersTechnologic.has(inputValue) ? setFiltersTechnologic.delete(inputValue) : setFiltersTechnologic.add(inputValue);
            return setFiltersTechnologicSelected(Array.from(setFiltersTechnologic.values()));
        }

        if (inputRef == 'experience') {
            setFiltersExperience.has(inputValue) ? setFiltersExperience.delete(inputValue) : setFiltersExperience.add(inputValue);
            return setFiltersExperienceSelected(Array.from(setFiltersExperience.values()));
        }

        if(inputRef == 'localization'){
            setFiltersLocalization.has(inputValue) ? setFiltersLocalization.delete(inputValue) : setFiltersLocalization.add(inputValue)
            return setFiltersLocalizationsSelected(Array.from(setFiltersLocalization.values()));
        }

    }, []);

    const handlerSubmit = () => {        
        filtersExperienceSelected.length > 0 && filtersExperienceSelected.push('12+ years');
        setNewCandidatesCurrentFilters({filtersTechnologicSelected, filtersExperienceSelected, filtersLocalizationsSelected});
        setActiveFilterMobile(false);
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    }

    return (
        <> 

            <BtnFilterMobile onClick={() => setActiveFilterMobile(true)}> FILTRE 🔍 </BtnFilterMobile>

            <Aside active={activeFilterMobile}>

                <FilterInfos> FILTRE 🔍 </FilterInfos>

                <BtnCloseFilterMobile onClick={() => setActiveFilterMobile(false)}> X </BtnCloseFilterMobile>

                <FiltersOptions>
                    <H2>Tecnologias</H2>
                    <Ul>
                        {
                            technologies.map((tecnologic, index) => {
                                return (
                                    <Li key={index}>
                                        <Label>
                                            {tecnologic.name}
                                                <InputCheckbox data-filter={tecnologic.name} data-ref="technologic" type="checkbox" onChange={(e) => handlerFilters(e)} />
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

                                const experienceName = experience.name.split('-')[0] && experience.name.split('years')[0];

                                return (
                                    <Li key={index}>
                                        <Label>
                                            {
                                               experienceName + " anos ou mais"
                                            }
                                                <InputCheckbox data-filter={experience.name} data-ref="experience" type="checkbox" onChange={(e) => handlerFilters(e)}/>
                                            <SpanCheckbox />
                                        </Label>
                                    </Li>
                                )
                            })
                        }
                    </Ul>
                </FiltersOptions>

                <FiltersOptions>
                    <H2>localização</H2>
                    <Ul>
                        {
                            localizations.map((localization, index) => {
                                return (
                                    <Li key={index}>
                                        <Label>
                                            {localization.name}
                                                <InputCheckbox data-filter={localization.name} data-ref="localization" type="checkbox" onChange={(e) => handlerFilters(e)}/>
                                            <SpanCheckbox />
                                        </Label>
                                    </Li>
                                )
                            })
                        }
                    </Ul>
                </FiltersOptions>

                {
                    filtersTechnologicSelected.length > 0 && 
                        <BtnActionFilter onClick={() => handlerSubmit()}> 
                           {
                               loader ? <LoaderIcon /> : "Filtrar"
                           }
                        </BtnActionFilter>
                }

            </Aside>
        </>
    )
};