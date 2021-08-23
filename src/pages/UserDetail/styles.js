import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;

    input {
        width: 40rem;
    }
    select {
        width: 40rem;
    }

    > * {
        margin-bottom: 1rem;
    }
    @media (max-width: 425px) {
        width: 100%;
        input {
            width: 100vw;
        }
        select {
            width: 100vw;
        }
    }
`;
