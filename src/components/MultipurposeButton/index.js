import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const MultipurposeButton = (props) => {
    return (
        <StyledButton
            disabled={props.disabled}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </StyledButton>
    );
};

MultipurposeButton.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default MultipurposeButton;
