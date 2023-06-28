import React, { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

    const handleSubmit = (event) => {
      event.preventDefault();
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    
    };
 

  return (
    <div className='form-group'>
    <div className="form">
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          id="firstname"
          className="input"
          type="text"
          placeholder=""
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input
          id="lastname"
          className="input"
          type="text"
          placeholder=""
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Last name</label>
      </div>
      <div className="input-container ic2">
        <input
          id="email"
          className="input"
          type="text"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
        
      </div>
      <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">Mot de passe</label>
        </div>
      <button type="submit" className="submit" onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default ContactForm;