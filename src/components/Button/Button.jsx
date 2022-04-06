import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ children, type, onClick }) => {

  return (
    <button type={type} className='btn' onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button'
};
 
export default Button;
