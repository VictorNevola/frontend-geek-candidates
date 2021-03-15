import { useContext } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CandidatesContext } from '../../Context/candidates';
import { Section, SpanInfo, DivCard, SpanCity, Title, SpanExperience, ImageUser, Em, Ul, TextInfo, LoaderIcon } from './styles'

export const Cards = () => {
    const { candidates, filtersDefined, loader } = useContext(CandidatesContext);

    const settingsSlider = { dots: true,infinite: false, speed: 500, slidesToScroll: 2, variableWidth: true, arrows: false, swipe: true, rows: 1,};

    return (
        <>
            { loader && <LoaderIcon /> }

            { !loader &&
                <Section>
                    { candidates.length == 0 && !filtersDefined?.defined && !loader && <SpanInfo> Selecione ao menos uma tecnologia no filtro para visualizar os candidatos.</SpanInfo> }

                    { candidates.length == 0 && filtersDefined?.defined && !loader && <SpanInfo> Não encontramos resultados para sua busca, verifique os filtros e tente novamente.</SpanInfo> }

                    { candidates.length > 0 && !loader &&

                        candidates.map((candidate, index) => {
                            const candidateMainTech = candidate.technologies.find(tech => tech.is_main_tech);
                            return (
                                <DivCard key={index}>
                                    <ImageUser src={candidate.photoUserUrl} alt="User Profile" />
                                    <SpanCity> {candidate.city} </SpanCity>

                                    { filtersDefined?.moreOneFilterTech && <Title> Desenvolvedor(a) {candidateMainTech.name} </Title> }
                                    { !filtersDefined?.moreOneFilterTech && <Title> Desenvolvedor(a) {filtersDefined?.filterMainTech}</Title> }

                                    <SpanExperience> Experiência {candidate.experience.replace('years', 'anos')}</SpanExperience>
                                    <Em> Tecnologias que ja trabalhou</Em>
                                    <Ul>
                                        <Slider {...settingsSlider}>
                                            {candidate.technologies.map((tech, index) => <TextInfo key={index}> <span>{tech.name}</span> </TextInfo>)}
                                        </Slider>
                                    </Ul>
                                </DivCard>
                            )
                        })
                    }
                </Section>
            }
        </>
    )
}