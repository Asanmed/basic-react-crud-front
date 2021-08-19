import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const StyledButton = styled.button`
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};
    width: 20rem;
    padding: 0.5rem;
    font-size: 2rem;
    border-width: 0.1rem;
    border-color: ${colors.primary};
    background-color: ${(props) =>
        props.disabled ? colors.primaryLight : colors.primary};
    color: ${colors.white};
    border-style: solid;
    border-radius: 0.3rem;

    &:active {
        background-color: ${colors.primaryLight};
    }
    @media (max-width: 425px) {
        width: 100%;
    }
`;
