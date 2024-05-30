import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Veuillez remplir tous les champs.');
    } else if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
    } else {
      // Logique d'inscription ici
    }
  };

  return (
    <div className="page" id="inscription_page">
      <h2>Inscription</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="input_container">
        <input type="text" placeholder="Email Address" id="name" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="input_container">
        <input type="password" placeholder="Password" id="matricule" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="input_container">
        <input type="password" placeholder="Confirm Password" id="matricule" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      <button id="connect" onClick={handleRegister}>S'inscrire</button>
      <div className="bottom">
        <Link to="/ActivationCode.js" id="connexion">Se connecter ?</Link>
      </div>
    </div>
  );
}

export default Register;
