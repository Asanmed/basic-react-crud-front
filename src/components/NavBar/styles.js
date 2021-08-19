import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    width: 80vw;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0 auto;
    margin-bottom: 6rem;
    padding: 0;
    overflow: hidden;
    background: ${colors.primary};

    .clicable {
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }

    li {
        display: block;
        height: 100%;
        width: 10rem;
        text-align: center;
        justify-items: center;
        padding: 1.4rem 1.6rem;

        color: ${colors.white};
        background: ${colors.primaryLight};

        text-transform: capitalize;
    }
    .greeting {
        display: flex;
        flex-direction: row;

        p {
            margin-top: 1.5rem;
        }
    }
    p {
        text-transform: capitalize;
        height: 100%;
        margin: 0;
        margin-right: 1rem;
        width: fit-content;
        color: ${colors.white};
    }

    @media (max-width: 768px) {
        width: 100vw;
        .greeting {
            flex-direction: column;
            p {
                margin-top: 0.1rem;
            }
        }
    }
    @media (max-width: 425px) {
        width: 100vw;
        .greeting {
            display: none;
        }
    }
`;
