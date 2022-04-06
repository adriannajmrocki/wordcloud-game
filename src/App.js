import React, { useState } from 'react';

import Login from './components/Login/Login';
import Game from './components/Game/Game';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [nickname, setNickname] = useState('');

  const authenticateUser = () => {
    setIsAuth(true);
  };

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div className="container">
      {isAuth
      ? <Game nickname={nickname} />
      : <Login authenticateUser={authenticateUser} onChange={handleChange} nickname={nickname} />}
    </div>
  );
};

export default App;
