import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    requestUpdateUser,
    requestRemoveUser,
    requestAddUser,
    selectUiState,
    selectLoggedUser,
    restoreReadyState,
} from '../../state/userApp';

import StyledSelect from '../../components/Select';
import StyledSpinner from '../../components/Spinner';
import TextInput from '../../components/TextInput';
import MsgBox from '../../components/MsgBox';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import userRoles from '../../utils/userRoles';
import { errorMessages } from '../../utils/ErrorMessages';
import MultipurposeButton from '../../components/MultipurposeButton';
import { validations } from '../../utils/validations';
import UiState from '../../utils/UiState';

import { Wrapper } from './styles';

const UserDetail = () => {
    const location = useLocation();
    const { id } = useParams();
    const uiState = useSelector(selectUiState);
    const loggedUser = useSelector(selectLoggedUser);
    const user = location.state.user;

    //states
    const [firstName, setFirstName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role);
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const [showCreateUser, setShowCreateUser] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();

    const clearFlields = () => {
        setFirstName('');
        setEmail('');
        setRole('USER_ROLE');
    };

    //Handlers
    const updateUserHandler = async () => {
        dispatch(
            requestUpdateUser({
                id: id,
                name: firstName,
                password: password,
                role: role,
                email: email,
            })
        );
    };

    const deleteUserHandler = async () => {
        dispatch(requestRemoveUser(id));
    };

    const handleCreateNewUser = () => {
        clearFlields();
        setShowCreateUser(true);
    };

    const createUserHandler = async () => {
        dispatch(
            requestAddUser({
                name: firstName,
                password: password,
                role: role,
                email,
            })
        );
    };

    const calcelCreateHandler = () => {
        setFirstName(user.name);
        setEmail(user.email);
        setRole(userRoles[user.role]);
        setShowCreateUser(false);
    };

    //validations
    const validationsChain = [
        !validations.checkEmptyField(firstName),
        !validations.checkValidEmail(email),
        !validations.checkValidPassword(password),
        !validations.checkValidPassword(passwordMatch),
        password === passwordMatch,
    ];

    let validationsCheck = validationsChain.includes(false);

    return (
        <>
            <NavBar />
            <Wrapper>
                {uiState === UiState.Ready && (
                    <>
                        <TextInput
                            className="fill"
                            error={validations.checkEmptyField(firstName)}
                            errorMsg={errorMessages.missingUserName}
                            value={firstName}
                            setParentText={setFirstName}
                        />
                        <StyledSelect
                            value={role}
                            onChange={(e) => {
                                setRole(e.target.value);
                            }}
                        >
                            <option value="ADMIN_ROLE">
                                {userRoles.ADMIN_ROLE}
                            </option>
                            <option value="USER_ROLE">
                                {userRoles.USER_ROLE}
                            </option>
                            <option value="SALES_ROLE">
                                {userRoles.SALES_ROLE}
                            </option>
                        </StyledSelect>
                        <TextInput
                            disabled={!showCreateUser}
                            error={validations.checkValidEmail(email)}
                            errorMsg={errorMessages.missingValidEmail}
                            type="email"
                            value={email}
                            setParentText={setEmail}
                        />
                        {showCreateUser && (
                            <>
                                <TextInput
                                    error={validations.checkValidPassword(
                                        password
                                    )}
                                    errorMsg={
                                        errorMessages.missingValidPassword
                                    }
                                    type="password"
                                    value={password}
                                    placeholder="Nueva Contraseña"
                                    setParentText={setPassword}
                                />
                                <TextInput
                                    error={password !== passwordMatch}
                                    errorMsg={
                                        errorMessages.notMatchingPasswords
                                    }
                                    type="password"
                                    value={passwordMatch}
                                    placeholder="Nueva Contraseña"
                                    setParentText={setPasswordMatch}
                                />
                            </>
                        )}
                        {!showCreateUser && (
                            <>
                                <MultipurposeButton onClick={deleteUserHandler}>
                                    Borrar
                                </MultipurposeButton>
                                <MultipurposeButton onClick={updateUserHandler}>
                                    Actualizar
                                </MultipurposeButton>
                                <MultipurposeButton
                                    disabled={loggedUser.role === 'USER_ROLE'}
                                    onClick={handleCreateNewUser}
                                >
                                    Nuevo Usuario
                                </MultipurposeButton>
                            </>
                        )}

                        {showCreateUser && (
                            <>
                                <MultipurposeButton
                                    disabled={validationsCheck}
                                    onClick={createUserHandler}
                                >
                                    Crear
                                </MultipurposeButton>
                                <MultipurposeButton
                                    onClick={calcelCreateHandler}
                                >
                                    Cancelar
                                </MultipurposeButton>
                            </>
                        )}
                        <MultipurposeButton
                            onClick={() => history.push(`/users`)}
                        >
                            Volver
                        </MultipurposeButton>
                    </>
                )}

                {uiState === UiState.Processing ||
                    (uiState === UiState.Loading && <StyledSpinner />)}
                {uiState === UiState.ErrorProcessing && (
                    <MsgBox
                        msg={errorMessages.errorApiWrite}
                        type="error"
                    ></MsgBox>
                )}
                {uiState === UiState.ErrorPerms && (
                    <MsgBox
                        msg={errorMessages.errorPerms}
                        type="error"
                        buttonText="Volver"
                        buttonClick={() => dispatch(restoreReadyState())}
                    ></MsgBox>
                )}
            </Wrapper>
            <Footer msg="Gracias por su visita" />
        </>
    );
};

export default UserDetail;
