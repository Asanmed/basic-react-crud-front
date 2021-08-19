import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    .role {
        text-align: center;
        max-height: 3rem;
        box-sizing: border-box;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background: ${colors.primary};
        height: 100%;
        border-style: none;
        p {
            margin: 0;
            color: ${colors.white};
        }
    }
    .name {
        box-sizing: border-box;
        color: #000000;
        background: ${colors.white};
        border-color: ${colors.primary};
        border-width: 0.1rem;
        border-bottom-style: solid;
        border-left-style: solid;
        border-right-style: solid;
        span {
            margin: 0;
            color: ${colors.primary};
        }
        p {
            margin: 0;
            color: ${colors.primary};
        }
    }

    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    font-size: 2rem;
    :hover {
        transform: translatey(0.15rem);
        box-shadow: 0.1rem 0.1rem 0.5rem 0.2rem ${colors.primaryLight};
        transition-duration: 100ms;
    }
`;
