import React, { useState } from 'react';
import NavBarEigth from '../globals/NavBarEigth';

const ProfilePage = () => {
  // État local pour gérer les informations du profil
  const [firstName, setFirstName] = useState('Seb');
  const [lastName, setLastName] = useState('Douay');
  const [dateOfBirth, setDateOfBirth] = useState('1991-04-23');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Marseille');
  const [PostalCode, setPostalCode] = useState('13000');
  const [country, setCountry] = useState('France');
  

  // État local pour gérer la photo de profil
  const [profilePicture, setProfilePicture] = useState('');

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer ici l'enregistrement des informations dans la base de données, par exemple
    console.log('Informations enregistrées :', {
      firstName,
      lastName,
      dateOfBirth,
      address,
      profilePicture,
      PostalCode,
      country,
      city,
    });
  };

  // Fonction de gestion du changement de photo de profil
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    // Effectuer ici le traitement de l'image, par exemple en la téléchargeant sur le serveur
    // et en mettant à jour l'URL de la photo de profil
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-page">
        <NavBarEigth />
    <h1>Profil</h1>
    <div className="profile-picture-container">
      {profilePicture && (
        <img src={profilePicture} alt="Photo de profil" className="profile-picture" />
      )}
      <label htmlFor="profile-picture-input" className="profile-picture-label">
        
      </label>
      <input
        id="profile-picture-input"
        type="file"
        accept="image/*"
        onChange={handleProfilePictureChange}
      />
    </div>
    <form onSubmit={handleSubmit}>
      <label>
        Prénom:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Nom:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Date de naissance:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>
      <label>
        Adresse:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
    Code postal:
    <input
      type="text"
      value={PostalCode}
      onChange={(e) => setPostalCode(e.target.value)}
    />
  </label>
  <label>
    Ville:
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  </label>
  <label>
    Pays:
    <input
      type="text"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    />
  </label>
      <button type="submit">Enregistrer</button>
    </form>
  </div>
  );
};

export default ProfilePage;
