import styles from 'styled-components';
import { IpropsStyleFilterMoreOptions } from './types';


export const Aside = styles.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 17px;
    box-shadow: 0px 2px 2px #00000029;
    border: 1px solid #f9f9f9;
    background-color: #ffffff;
    padding: 26px;
`;
export const FilterInfos = styles.p`
    display: block;
    letter-spacing: 1.92px;
    font-size: 14px;
    color: #6e2b77;
    font-weight: 600;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #9f9f9f6b;
`;

export const FiltersOptions = styles.div`
    margin-bottom: 18px
`

export const H2 = styles.h2`
    font-size: 18px;
    letter-spacing: 0.500px;
    color: #11273a;
    margin-bottom: 8px;
`;

export const Ul = styles.ul`
    overflow: auto;
    margin-bottom: 8px;
    transition: height .4s ease-in-out;
    max-height: 20rem;

    &::-webkit-scrollbar {
        background-color:#fff;
        width:16px
    }

    &::-webkit-scrollbar-track {
        background-color:#fff
    }

    &::-webkit-scrollbar-thumb {
        background-color:#babac0;
        border-radius:16px;
        border:5px solid #fff
    }

    &::-webkit-scrollbar-button {display:none}
    
`;

export const Li = styles.li`
    font-size: 14px;
    color: #939da5;
    line-height: 1.75rem;
    font-weight: 600;
`;

export const Label = styles.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 8px;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    color: #939da5;
    line-height: 1.75rem;
    font-weight: 600;

    &:hover input ~ span{
        background-color: #ccc;
    }

    & input:checked ~ span {
        background-color: #6e2b77;

        &:after {
            display: block;
        }
    }
`;

export const InputCheckbox = styles.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

export const SpanCheckbox = styles.span`
    position: absolute;
    top: 6px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    transition: all .4s ease;

    &:after {
        display: none;
        content: "";
        position: absolute;
        left: 5px;
        top: 2px;
        width: 3px;
        height: 7px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`;

export const BtnActionFilter = styles.button`
    margin-top: 16px;
    background: #6e2b77 0% 0% no-repeat padding-box;
    border-radius: 2px;
    letter-spacing: 0.96px;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    padding: 8px;
`;