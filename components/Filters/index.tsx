import { Aside, FilterInfos, H2, Ul, Li, FiltersOptions, Label, InputCheckbox, SpanCheckbox, BtnActionFilter, BtnFilterMobile, BtnCloseFilterMobile, LoaderIcon } from './styles'
import { IFiltersAvailbles } from '../../typings/pages/home';
import { CandidatesContext } from '../../Context/candidates';
import React, { useCallback, useContext, useState } from 'react';

export const Filters = ({ experiences, technologies, localizations }: IFiltersAvailbles) => {
    const { setNewCandidatesCurrentFilters, loader } = useContext(CandidatesContext);
    const [activeFilterMobile, setActiveFilterMobile] = useState(false);

    const setFiltersTechnologic = new Set<string>();
    const setFiltersLocalization = new Set<string>();
    const [filtersTechnologicSelected, setFiltersTechnologicSelected] = useState<string[]>([]);
    const [filtersExperienceMinValue, setFiltersExperienceSelected] = useState<number>();
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
            const experiencesCheckboxs = document.querySelectorAll('#checkbox_experiences input:checked');
            experiencesCheckboxs?.forEach((inputChecked: HTMLInputElement) => inputChecked.checked = false);
            input.checked = true;
            return setFiltersExperienceSelected(Number(inputValue))
        }

        if (inputRef == 'localization') {
            setFiltersLocalization.has(inputValue) ? setFiltersLocalization.delete(inputValue) : setFiltersLocalization.add(inputValue)
            return setFiltersLocalizationsSelected(Array.from(setFiltersLocalization.values()));
        }

    }, []);

    const handlerSubmit = () => {
        setNewCandidatesCurrentFilters({ filtersTechnologicSelected, filtersExperienceMinValue, filtersLocalizationsSelected });
        setActiveFilterMobile(false);
        window.scrollTo({
            top: 0,
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
                    <H2>Experiência apartir de</H2>
                    <Ul id='checkbox_experiences'>
                        {
                            experiences.map((experience, index) => {

                                const minExperienceFormated = Number(experience.name.split('years')[0].split('-')[0].replace('+', ''));

                                return (
                                    <Li key={index}>

                                        <Label>
                                            {
                                                index === 0 && "Sem experiência"
                                            }
                                            <InputCheckbox data-filter={minExperienceFormated} data-ref="experience" type="checkbox" onChange={(e) => handlerFilters(e)} />
                                            <SpanCheckbox />
                                        </Label>

                                        {
                                            index !== 0 &&
                                            <Label>
                                                {
                                                    index === 1 ? minExperienceFormated + " ano" : minExperienceFormated + " anos"
                                                }
                                                <InputCheckbox data-filter={minExperienceFormated} data-ref="experience" type="checkbox" onChange={(e) => handlerFilters(e)} />
                                                <SpanCheckbox />
                                            </Label>
                                        }

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
                                            <InputCheckbox data-filter={localization.name} data-ref="localization" type="checkbox" onChange={(e) => handlerFilters(e)} />
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