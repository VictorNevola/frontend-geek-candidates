import styles from 'styled-components';

export const Section = styles.section`
    padding: 32px 0px;
`;

export const H1 = styles.h1`
    font-size: 26px;
    color: #363940;
    font-weight: 500;
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
`;

export const Content = styles.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-top: 34px;
`