// ActivationCode.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate au lieu de useHistory
import './ActivationCode.css';

function ActivationCode() {
  const [activationCode, setActivationCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Utilisez useNavigate au lieu de useHistory

  const handleChange = (e) => {
    setActivationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Suppose que le code d'activation est vérifié avec succès
    if (activationCode === '1234') {
      // Redirigez vers la page de bienvenue
      navigate('/welcome'); // Utilisez navigate au lieu de history.push
    } else {
      setError('Code d\'activation incorrect.');
    }
  };

  return (
    <div className="page" id="activation_page">
      <h2>Activation Code</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={activationCode} onChange={handleChange} placeholder="Enter activation code" required />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default ActivationCode;
