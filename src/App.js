import './App.css';
import * as React from 'react';
import Dashboard from './components/index';

function App() {
  return (
    <div className="App"> <Dashboard title="Meu Painel de Controle" /> <Dashboard />
    </div>
  );
}

export default App;
