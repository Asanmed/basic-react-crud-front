import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

const Footer = ({ msg }) => {
    return (
        <Wrapper>
            <p>{msg}</p>
        </Wrapper>
    );
};

Footer.propTypes = {
    msg: PropTypes.string,
};

export default Footer;
