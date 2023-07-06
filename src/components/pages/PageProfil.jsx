import React from 'react';
import NavBarEigth from '../globals/NavBarEigth';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const profileData = {
    firstName: 'Seb',
    lastName: 'Douay',
    dateOfBirth: '1991-04-23',
    address: '25 rue de Carquefou',
    city: 'Marseille',
    postalCode: '13000',
    country: 'France',
    profilePicture:
      'https://scontent-cdg4-2.xx.fbcdn.net/v/t1.18169-9/21369347_1989168451359048_5695076680075608336_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=bNIotAa77r0AX-7ohZY&_nc_ht=scontent-cdg4-2.xx&oh=00_AfDiIvrPT55qwOobkvIfjs51CaUh1P0OA00gQF0RNYd6TA&oe=64C384C3',
  };

  const handleEditProfile = () => {
    // Logique pour la gestion de l'édition du profil
    console.log('Modifier le profil');
  };

  return (
    <div className="profile-page">
      <NavBarEigth />
      <h1>Profil</h1>
      <div className="profile-picture-container">
        <div className="profile-picture-wrapper">
          <img
            src={profileData.profilePicture}
            alt="Photo de profil"
            className="profile-picture"
          />
        </div>
      </div>
      <div className="profile-info">
        <p>
          <span className="label">Prénom:</span>
          <span className="value">{profileData.firstName}</span>
        </p>
        <p>
          <span className="label">Nom:</span>
          <span className="value">{profileData.lastName}</span>
        </p>
        <p>
          <span className="label">Date de naissance:</span>
          <span className="value">{profileData.dateOfBirth}</span>
        </p>
        <p>
          <span className="label">Adresse:</span>
          <span className="value">{profileData.address}</span>
        </p>
        <p>
          <span className="label">Code postal:</span>
          <span className="value">{profileData.postalCode}</span>
        </p>
        <p>
          <span className="label">Ville:</span>
          <span className="value">{profileData.city}</span>
        </p>
        <p>
          <span className="label">Pays:</span>
          <span className="value">{profileData.country}</span>
        </p>
      </div>
      <Link to="/profil-modif" className="button-edit-profile">
        Modifier le profil
      </Link>
    </div>
  );
};

export default ProfilePage;

