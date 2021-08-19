import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    p {
        box-sizing: border-box;
        color: ${colors.red};
        margin: 0;
        font-size: 1.2rem;
    }
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0.5rem;
    font-size: 2rem;
    color: ${(props) => (props.disabled ? colors.grey : colors.primary)};
    background-color: ${colors.white};
    border-width: 0.1rem;
    border-color: ${colors.primary};
    border-style: solid;
    border-color: ${(props) => (props.error ? colors.red : '')};
    border-radius: 0.3rem;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 6px ${colors.primaryLight};
    }
`;
