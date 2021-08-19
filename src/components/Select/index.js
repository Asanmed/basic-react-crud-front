import styled from 'styled-components';

import { colors } from '../../styles/colors';

const StyledSelect = styled.select`
    padding: 0.5rem;
    font-size: 2rem;
    border-width: 0.1rem;
    border-color: ${colors.primary};
    background-color: ${colors.white};
    color: ${colors.primary};
    border-style: solid;
    border-radius: 0.3rem;
    text-shadow: 0px 0px 1px ${colors.primaryLight};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 6px ${colors.primaryLight};
    }
`;

export default StyledSelect;
