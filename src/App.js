// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import ActivationCode from './ActivationCode';
import WelcomePage from './WelcomePage'; // Importez la composante WelcomePage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activation" element={<ActivationCode />} />
          <Route path="/welcome" element={<WelcomePage />} /> {/* Ajoutez cette route pour WelcomePage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
