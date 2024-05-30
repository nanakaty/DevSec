import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import './App.css';

function Confirmation() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleCodeChange = (e) => {
    e.preventDefault();
    setCode(e.target.value);
    setError(''); // Réinitialiser l'erreur lors de la saisie
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (code.trim() === '') {
      setError('Code cannot be empty');
      return;
    }

    // Exemple de vérification du code
    const correctCode = '123456'; // Remplacez par la logique de vérification réelle
    if (code === correctCode) {
      alert('Code verified successfully!');
      // Redirigez l'utilisateur vers une autre page ou effectuez une action
    } else {
      setError('Incorrect code');
    }
  };

  return (
    <div className="confirmation-container">
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol md='8' lg='6' xl='5'>
            <MDBCard className='bg-glass confirmation-card'>
              <MDBCardBody className='p-5 text-center'>
                <h2 className="fw-bold mb-4">Check Your Email</h2>
                <p className="text-muted mb-4">A confirmation email has been sent to your address with an activation code.</p>
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Enter Confirmation Code' 
                  id='confirmationCode' 
                  type='text' 
                  value={code}
                  onChange={handleCodeChange}
                />
                {error && <p className="text-danger">{error}</p>}
                <MDBBtn className='enter-code-btn' onClick={handleVerifyCode}>
                  Verify Code
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Confirmation;
