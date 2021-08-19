import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        margin-bottom: 1rem;
    }
    > *:last-child {
        margin-bottom: 0px;
    }
`;
