import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import userRoles from '../../utils/userRoles';
import { Wrapper } from './styles';
import { requestLoadSingleUser } from '../../state/userApp';
import { useDispatch } from 'react-redux';

const ListItem = ({ user }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(requestLoadSingleUser(user.id));
        history.push({ pathname: `/details/${user.id}` });
    };
    return (
        <Wrapper onClick={handleClick}>
            <div className="role">
                <p>{`${userRoles[user.role]}`}</p>
            </div>

            <div className="name">
                <p>
                    <span className="tag">Name: </span>
                    {`${user.first_name}`}
                    <span> Lastname: </span>
                    {`${user.last_name}`}
                </p>
            </div>
        </Wrapper>
    );
};

ListItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
};

export default ListItem;
