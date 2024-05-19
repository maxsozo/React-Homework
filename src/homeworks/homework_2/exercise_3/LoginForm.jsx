import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const isButtonDisabled = login.length === 0 || password.length === 0;
  
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isButtonDisabled) {
      onLogin(login, password);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Login:</label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={handleLoginChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" disabled={isButtonDisabled}>Login</button>
    </form>
  );
}

export default LoginForm;