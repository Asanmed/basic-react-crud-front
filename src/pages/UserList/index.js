import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    requestLoadUsers,
    selectUiState,
    selectUsers,
} from '../../state/userApp';

import MsgBox from '../../components/MsgBox';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';

import { errorMessages } from '../../utils/ErrorMessages';
import UiState from '../../utils/UiState';

import { StyledUserList } from './styles';

const UsersList = () => {
    const users = useSelector(selectUsers);
    const uiState = useSelector(selectUiState);

    const usernum = users.total;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestLoadUsers(usernum));
    }, [dispatch, usernum]);

    return (
        <>
            <NavBar />
            {uiState === UiState.Ready && (
                <>
                    <StyledUserList>
                        {users.data.map((e) => {
                            return <ListItem key={e.id} user={e} />;
                        })}
                    </StyledUserList>
                    <Footer msg="Gracias por su visita" />
                </>
            )}
            {uiState === UiState.Loading && <Spinner />}
            {uiState === UiState.ErrorLoading && (
                <MsgBox msg={errorMessages.errorApiRead} type="error"></MsgBox>
            )}
        </>
    );
};

export default UsersList;
