import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledInput, Wrapper } from './styles';

const TextInput = ({
    disabled,
    error,
    errorMsg,
    placeholder,
    value,
    type,
    setParentText,
}) => {
    const [text, setText] = useState(value);

    const handleOnChange = (e) => {
        setText(e.target.value);
        setParentText(e.target.value);
    };

    useEffect(() => {
        setText(value);
    }, [value]);

    return (
        <Wrapper>
            {error && <p>{errorMsg}</p>}
            <StyledInput
                disabled={disabled}
                error={error}
                type={type}
                value={text}
                placeholder={placeholder}
                onChange={(e) => handleOnChange(e)}
            />
        </Wrapper>
    );
};

TextInput.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    errorMsg: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    setParentText: PropTypes.func,
};

export default TextInput;
