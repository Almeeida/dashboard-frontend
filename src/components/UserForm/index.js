import React, { useState } from 'react';

import './style.css';

/**
 * The user form functions
 * @param {Function} options.onSubmit The function that gets ran whenever the user submits their credentials.
 * @return {HTMLFormElement} The form.
 */
function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  /**
   * What handles the submit event.
   * @param {Event} e The event whenever the user submits their credentials.
   * @return {Promise<void>}
   */
  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      email,
      username,
      password,
    });

    setUsername('');
    setPassword('');
    setEmail('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="">Username</label>
        <input
          name="username"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="">Email</label>
        <input
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
