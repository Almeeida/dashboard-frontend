import React from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';

import DevForm from './components/UserForm';

/**
 * The main application function
 * @return {HTMLDivElement} The main div element.
 */
function App() {
  /**
   * What handles the submit data whenever the user submits their credentials.
   * @param {Object} data The data from the form.
   * @return {Promise<void>}
   */
  async function handleSubmit(data) {
    await api.post('/users', data);
  }

  return (
    <div id="app">
      <main>
        <strong>Login</strong>
        <DevForm onSubmit={handleSubmit}/>
      </main>
    </div>
  );
}

export default App;
