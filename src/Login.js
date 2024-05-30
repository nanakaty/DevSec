// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="page" id="register_page">
      <h2>Connexion</h2>
      <div className="input_container">
        <input type="text" placeholder="Email Address" id="name" required />
      </div>
      <div className="input_container">
        <input type="password" placeholder="Password" id="matricule" required />
      </div>
      <button id="connect">
        <Link to="/activation" id="inscription">Se connecter</Link>
      </button>
      <div className="bottom">
        <a href="#" id="inscription">Forgot password?</a>
        <Link to="/register" id="inscription">S'inscrire ?</Link>
      </div>
    </div>
  );
}

export default Login;
