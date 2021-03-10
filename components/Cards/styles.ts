import styles from 'styled-components';

export const Section = styles.section`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(47%,1fr));
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    margin-top: 17px;
    width: 76%;

    @media (min-width:320px) and (max-width:768px) {
        width: 100%;
    }

    @media (min-width:20px) and (max-width:630px) {
        grid-template-columns: repeat(auto-fill,minmax(100%,1fr));
    }

`;

export const SpanInfo = styles.span`
    display: block;
    color: #000000b3;
    line-height: 20px;
    font-size: 17px;
    font-weight: bold;
    margin-top: 4px;
    white-space: nowrap;
    @media (min-width:320px) and (max-width:768px) {
        white-space: normal;
    }
`;

export const DivCard = styles.div`
    box-shadow: 0px 2px 2px #00000029;
    border: 1px solid #f9f9f9;
    background-color: #ffffff;
    padding: 26px;
    // max-width: 30rem;
    // height: 19rem;
`

export const ImageUser = styles.img`
    display: block;
    border-radius: 50%;
    width: 72px;
    margin: 0 auto;
    margin-bottom: 18px;
`;

export const SpanCity = styles.span`
    display: block;
    text-align: left;
    letter-spacing: 1.92px;
    color: #6e2b77;
    font-weight: bold;
    font-size: 12px;
`

export const Title = styles.h2`
    margin-top: 10px;
    font-size: 22px;
    line-height: 24px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #11273a;
    font-weight: 500;

    @media (min-width:320px) and (max-width:768px) {
        font-size: 18px;
    }
`;

export const SpanExperience = styles.span`
    display: block;
    color: #000000b3;
    line-height: 20px;
    font-size: 17px;
    font-weight: 500;
`;

export const Em = styles.em`
    display: block;
    color: #000000b3;
    line-height: 20px;
    font-size: 17px;
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 6px;
`;

export const Ul = styles.ul`
    max-heigth: 60px;
    margin-top: 12px;
    .slick-track {
        .slick-slide {
            div {
                margin-right: 14px;
            }
        }
    }
`;

export const TextInfo = styles.li`
    display: block;
    margin-rigth: 16px;

    & span {
        display: block;
        border: 1px solid #6e2b77;
        background-color: #ffffff;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.8px;
        line-height: 16px;
        border-radius: 2px;
        text-align: center;
        text-transform: uppercase;
        color: #6e2b77;
        min-width: 10px;
        padding: 3px 7px;
    }
`;  