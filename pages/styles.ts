import styles from 'styled-components';

export const Section = styles.section`
    padding: 32px 0px;
`;

export const H1 = styles.h1`
    font-size: 26px;
    color: #363940;
    font-weight: 500;

    @media (min-width:320px) and (max-width:768px) {
        font-size: 22px;
    }
`;

export const Strong = styles.strong`
    color: #6e2b77;
    font-weight: 600;
`;

export const Em = styles.em`
    display: block;
    color: #000000b3;
    line-height: 20px;
    font-size: 17px;
    font-weight: bold;
    margin-top: 4px;
`;

export const Main = styles.main`
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    padding: 0 1rem;
`;

export const Content = styles.div`
    display: flex;
    justify-content: space-between;
    margin-top: 34px;

    @media (min-width:320px) and (max-width:768px) {
        display: block;
    }
    
`