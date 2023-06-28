import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
//   const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de traitement pour la récupération de mot de passe
    console.log(`Email: ${email}`);
  };

  const handleGoBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="container-mdp">
      <h2>Récupération de mot de passe</h2>
      <form className="formMdp" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email-input"
          className="form-input"
          placeholder="Adresse e-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" className="form-submit-button">Envoyer</button>
      </form>
      <button className='next-connexion custom-button' onClick={handleGoBack}>Retour</button>
    </div>
  );
};

export default ForgotPassword;
