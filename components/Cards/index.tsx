import { useContext } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CandidatesContext } from '../../context/candidates';
import { Section, SpanInfo, DivCard, SpanCity, Title, SpanExperience, ImageUser, Em, Ul, TextInfo } from './styles'

export const Cards = () => {
    const { candidates, filtersDefined } = useContext(CandidatesContext);

    const settingsSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        arrows: false,
        swipe: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
        ]
    };

    return (
        <Section>
                {
                    candidates.length == 0  && !filtersDefined &&
                    <SpanInfo> Selecione ao menos uma tecnologia no filtro para visualizar os candidatos.</SpanInfo> 
                }

                {
                    candidates.length == 0 && filtersDefined &&
                    <SpanInfo> Não encontramos resultados para sua busca, verifique os filtros e tente novamente.</SpanInfo> 

                }

                {
                    candidates.length > 0 && 

                    candidates.map((candidate, index) => {

                        const candidateMainTechnologic = candidate.technologies.find(tech => tech.is_main_tech);

                        return (
                            <DivCard key={index}> 
                                <ImageUser src={candidate.photoUserUrl}  alt="User Profile"/>    
                                <SpanCity> {candidate.city} </SpanCity>
                                <Title> Desenvolvedor(a) {candidateMainTechnologic?.name || candidate.technologies[0].name} </Title>
                                <SpanExperience> Experiência {candidate.experience.replace('years', 'anos')}</SpanExperience>
                                <Em> Tecnologias que ja trabalhou</Em>
                                <Ul>
                                    <Slider {...settingsSlider}> 

                                        {candidate.technologies.map((tech, index) => {
                                            return (
                                                    <TextInfo key={index}> 
                                                        <span>{tech.name}</span>
                                                    </TextInfo>
                                            )
                                        })}

                                    </Slider>
                                    
                                </Ul>
                            </DivCard>
                        )
                    })
                }
                
        </Section>
    )
}