import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Wrapper = styled.footer`
    width: 80vw;
    height: 5rem;
    position: fixed;
    bottom: 0;
    left: 10vw;
    background: ${colors.primary};
    color: ${colors.white};
    text-align: center;

    @media (max-width: 768px) {
        width: 100vw;
        left: 0;
    }
`;

export default Wrapper;
