import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './Login.css';

const Login = ({ authenticateUser, onChange, nickname }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nickname.trim().length) {
      setErrorMessage('Please enter your nickname')
    } else {
      authenticateUser();
      setErrorMessage(null);
    }
  };

  return (
    <div className='login'>
      <h1 className='title'>Wordcloud Game</h1>
      <form className='login-form'>
      <input
        type='text'
        className='input'
        placeholder='Enter your nickname here...'
        onChange={onChange}
        value={nickname}
      />
      <p className="error">{errorMessage}</p>
      <Button type='submit' onClick={handleSubmit}>play</Button>
    </form>
    </div>
  );
};

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired
};
 
export default Login;
