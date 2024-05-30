import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './App.css';

function EnterCode() {
  const [codeFocus, setCodeFocus] = useState(false);

  return (
    <div className="enter-code-container">
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol md='8' lg='6' xl='5'>
            <MDBCard className='bg-glass enter-code-card'>
              <MDBCardBody className='p-5 text-center'>
                <h2 className="fw-bold mb-4">Enter Confirmation Code</h2>
                <p className="text-muted mb-4">Please enter the confirmation code sent to your email.</p>
                
                <div className="input-container">
                  <MDBInput 
                    wrapperClass='mb-4' 
                    labelClass={codeFocus ? 'text-grey' : 'text-grey-placeholder'} 
                    label={codeFocus ? '' : 'Confirmation Code'} 
                    id='formControlLg' 
                    type='text' 
                    size="lg"
                    onFocus={() => setCodeFocus(true)}
                    onBlur={() => setCodeFocus(false)}
                  />
                </div>

                <MDBBtn className='enter-code-btn' size='lg'>
                  Submit
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default EnterCode;
