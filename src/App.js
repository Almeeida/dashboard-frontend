import React from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';

import DevForm from './components/UserForm';

function App() {
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
