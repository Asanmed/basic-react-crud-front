import React from 'react';
import { errorMessages } from '../utils/ErrorMessages';
import { useHistory } from 'react-router';
import MsgBox from '../components/MsgBox';
import NavBar from '../components/NavBar';

import styled from 'styled-components';
import Footer from '../components/Footer';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ErrorPage = ({ error = errorMessages.pageNotFound, where = '/' }) => {
    const history = useHistory();
    return (
        <>
            <NavBar />
            <Wrapper>
                <MsgBox
                    type="error"
                    msg={error}
                    buttonClick={() => history.push(where)}
                    buttonText="Home"
                />
            </Wrapper>
            <Footer />
        </>
    );
};

export default ErrorPage;
