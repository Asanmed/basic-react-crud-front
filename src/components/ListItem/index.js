import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import userRoles from '../../utils/userRoles';
import { Wrapper } from './styles';

const ListItem = ({ user }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push({ pathname: `/details/${user.id}`, state: { user } });
    };
    return (
        <Wrapper onClick={handleClick}>
            <div className="role">
                <p>{`${userRoles[user.role]}`}</p>
            </div>

            <div className="name">
                <p>
                    {' '}
                    <span>Name: </span>
                    {`${user.name} `}{' '}
                </p>
            </div>
        </Wrapper>
    );
};

ListItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
};

export default ListItem;
