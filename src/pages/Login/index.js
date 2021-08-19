import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
    requestLoadUsers,
    restoreReadyState,
    showErrorLogin,
    showErrorProcessing,
    selectUiState,
    setLoggedUser,
    requestlogIn,
} from '../../state/userApp';

import StyledSpinner from '../../components/Spinner';
import MultipurposeButton from '../../components/MultipurposeButton';
import TextInput from '../../components/TextInput';
import MsgBox from '../../components/MsgBox';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import UserServices from '../../services/UserServices';

import UiState from '../../utils/UiState';
import { validations } from '../../utils/validations';
import { errorMessages } from '../../utils/ErrorMessages';

import { Wrapper } from './styles';

const Login = () => {
    const [email, setEmail] = useState('test1@test.com');
    const [password, setPassword] = useState('123456');
    const history = useHistory();
    const uiState = useSelector(selectUiState);

    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            dispatch(requestlogIn());
            const res = await UserServices.login({ email, password });
            localStorage.setItem('token', res.data.token);
            dispatch(setLoggedUser(res.data.user));
            dispatch(requestLoadUsers());
            history.push(`/users`);
        } catch (error) {
            if (!error.response) {
                dispatch(showErrorProcessing());
                return;
            } else if (error.response.status === 400) {
                dispatch(showErrorLogin());
            }
        }
    };

    useEffect(() => {
        dispatch(restoreReadyState());
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <Wrapper>
                {uiState !== UiState.Loading && (
                    <>
                        <TextInput
                            type="email"
                            placeholder="Email"
                            error={validations.checkValidEmail(email)}
                            errorMsg={errorMessages.missingValidEmail}
                            value={email}
                            setParentText={setEmail}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <TextInput
                            type="password"
                            placeholder="Password"
                            error={validations.checkEmptyField(password)}
                            errorMsg={errorMessages.missingPassword}
                            value={password}
                            setParentText={setPassword}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <MultipurposeButton onClick={handleLogin}>
                            Login
                        </MultipurposeButton>
                        {uiState === UiState.ErrorProcessing && (
                            <MsgBox
                                type="error"
                                msg={errorMessages.errorApiWrite}
                            />
                        )}
                        {uiState === UiState.ErrorLoading && (
                            <MsgBox
                                type="error"
                                msg={errorMessages.errorApiRead}
                            />
                        )}
                        {uiState === UiState.ErrorLogin && (
                            <MsgBox
                                type="error"
                                msg={errorMessages.errorLogin}
                            />
                        )}
                    </>
                )}

                {uiState === UiState.Loading && <StyledSpinner />}
                <Footer msg="Gracias por su visita" />
            </Wrapper>
        </>
    );
};

export default Login;
