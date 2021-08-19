import React from 'react';
import PropTypes from 'prop-types';
import { StyledMsgBox, StyledMsgButton } from './styles';

const acceptedTypes = ['info', 'success', 'warn', 'error'];

const MsgBox = ({ msg, type, buttonText, buttonClick }) => {
    return (
        <>
            <StyledMsgBox type={type}>
                {msg}
                {buttonClick && (
                    <StyledMsgButton onClick={buttonClick} type={type}>
                        {buttonText}
                    </StyledMsgButton>
                )}
            </StyledMsgBox>
        </>
    );
};

MsgBox.propTypes = {
    msg: PropTypes.string,
    type: PropTypes.oneOf(acceptedTypes),
    buttonClick: PropTypes.func,
    buttonText: PropTypes.string,
};

export default MsgBox;
