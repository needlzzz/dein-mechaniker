import React from 'react';
import { useState, useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const RegisterForm = () => {
  // inline styles definition
  const checkBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10',
  };

  // Handling of submit event using custom hook useInput
  const { value, bind, reset } = useInput('');
  const handleSubmit = (e) => {
    console.log('this and ', value);
    e.preventDefault();
    alert(`Submitting Name ${value}`);
    reset();
  };

  //useEffect(() => console.log(vorname, [vorname]));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registriere dich hier als privater Mechaniker</h1>
        <div className='icon'>
          <i className='fas fa-user-circle'></i>
        </div>
        <div className='formcontainer'>
          <div className='container'>
            <label for='vorname'>
              <strong>Vorname</strong>
            </label>
            <input
              type='text'
              {...bind}
              placeholder='Vorname eingeben'
              name='uname'
              required
              value={value}
              //onChange={(event) => setVorname(event.target.value)}
            />
            <label for='nachname'>
              <strong>Nachname</strong>
            </label>
            <input
              type='text'
              placeholder='Nachname eingeben'
              name='uname'
              required
            />
            <label for='mail'>
              <strong>E-mail</strong>
            </label>
            <input
              type='text'
              placeholder='E-Mailadresse eingeben'
              name='mail'
              required
            />
            <label for='services'>
              <div style={{ marginTop: 20, marginBottom: 10 }}>
                <strong>Was für Services bietest du an?</strong>
              </div>
            </label>
            <div id='checkboxes' style={checkBoxStyle}>
              <label for='smallService'>
                <input type='checkbox' id='one' />
                Kleiner Service
              </label>
              <label for='bigService'>
                {' '}
                <input type='checkbox' id='two' />
                Grosser Service inkl. Ventilspiel{' '}
              </label>
              <label for='tireChange'>
                <input type='checkbox' id='three' />
                Reifenwechsel{' '}
              </label>
              <label for='tuning'>
                <input type='checkbox' id='three' />
                Tuning{' '}
              </label>
            </div>
          </div>
        </div>
        <button type='submit'>
          <strong>Registrieren</strong>
        </button>
        <div className='container' style={{ backgroundColor: '#eee' }}>
          <label style={{ paddingLeft: '15px' }}></label>
        </div>
        <span className='psw'>
          <a href='#'>Forgot password?</a>
        </span>
      </form>
    </div>
  );
};

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById('checkboxes');
  if (!expanded) {
    checkboxes.style.display = 'block';
    expanded = true;
  } else {
    checkboxes.style.display = 'none';
    expanded = false;
  }
}

// This is the markup for the password input field if needed
/* </div>

<label for='psw'>
  <strong>Password</strong>
</label>
<input
  type='password'
  placeholder='Passwort eingeben'
  name='psw'
  required
/>
</div> */

export default RegisterForm;
