import React, { useState } from 'react';

const PasswordConfirm = ({ min }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (confirmPassword !== '' && event.target.value !== confirmPassword) {
      setError('Паролі не співпадають');
    } else if (event.target.value.length < min) {
      setError(`Мінімальна довжина пароля ${min}`);
    } else {
      setError('');
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (password !== '' && event.target.value !== password) {
      setError('Паролі не співпадають');
    } else if (event.target.value.length < min) {
      setError(`Мінімальна довжина пароля ${min}`);
    } else {
      setError('');
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Введіть пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <input
        type="password"
        placeholder="Підтвердіть пароль"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <br />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default PasswordConfirm;