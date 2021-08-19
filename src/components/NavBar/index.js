import React from 'react';
import { useHistory } from 'react-router';

import { Wrapper } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedUser, setLoggedUser } from '../../state/userApp';

const NavBar = () => {
    const loggedUser = useSelector(selectLoggedUser);
    const dispatch = useDispatch();

    const history = useHistory();
    return (
        <Wrapper>
            <li>Users CRUD</li>
            {loggedUser.id && (
                <>
                    <div className="greeting">
                        <p>¡Hola!</p> <p>{loggedUser.name}</p>
                    </div>{' '}
                    <li
                        className="clicable"
                        onClick={() => {
                            dispatch(setLoggedUser({}));
                            localStorage.clear();
                            history.push('/');
                        }}
                    >
                        {loggedUser.id ? 'log out' : 'log in'}
                    </li>
                </>
            )}
        </Wrapper>
    );
};

export default NavBar;
