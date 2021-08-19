import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    requestLoadUsers,
    restoreReadyState,
    selectUiState,
    selectUsers,
} from '../../state/userApp';

import StyledSelect from '../../components/Select';
import MsgBox from '../../components/MsgBox';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { errorMessages } from '../../utils/ErrorMessages';
import UiState from '../../utils/UiState';

import { StyledUserList } from './styles';

const UsersList = () => {
    const [usernum, setUsernum] = useState(5);
    const users = useSelector(selectUsers);
    const uiState = useSelector(selectUiState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestLoadUsers(usernum));
        dispatch(restoreReadyState());
    }, [dispatch, usernum]);

    return (
        <>
            <NavBar />
            {uiState === UiState.Ready && (
                <>
                    <StyledUserList>
                        <label htmlFor="quantity-select">Mostrar: </label>
                        <StyledSelect
                            id="quantity-select"
                            value={usernum}
                            onChange={(e) => {
                                setUsernum(e.target.value);
                            }}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={users.total + 1}>Todos</option>
                        </StyledSelect>
                        {users.map((e) => {
                            return <ListItem key={e.id} user={e} />;
                        })}
                    </StyledUserList>
                    <Footer msg="Gracias por su visita" />
                </>
            )}
            {uiState === UiState.ErrorLoading && (
                <MsgBox msg={errorMessages.errorApiRead} type="error"></MsgBox>
            )}
        </>
    );
};

export default UsersList;
