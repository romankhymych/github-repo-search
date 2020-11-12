import React from 'react';
import PropTypes from 'prop-types';

const Hyperlink = ({ href, children }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

Hyperlink.defaultProps = {
  href: '#',
  children: '',
};

Hyperlink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

export default Hyperlink;
