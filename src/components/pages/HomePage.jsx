
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('sign-in');
    //   const history = useHistory();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique de traitement pour la connexion (Sign In)
        // history.push('/dashboard');
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        // Ajoutez ici la logique de traitement pour l'inscription (Sign Up)
        // history.push('/dashboard');
    };

    return (
        <div className="wrapper fadeInDown">
            <div className="title">
                <h1 className="title-text">Mastering API Fetch</h1>
                <h2 className="subtitle-text">Unleashing the Power of Front-end and Back-end Integration</h2>
            </div>
            <div id="formContent">
                {/* Tabs Titles */}
                <h2
                    className={`${activeTab === 'sign-in' ? 'active' : 'inactive underlineHover'
                        }`}
                    onClick={() => handleTabClick('sign-in')}
                >
                    Sign In
                </h2>
                <h2
                    className={`${activeTab === 'sign-up' ? 'active' : 'inactive underlineHover'
                        }`}
                    onClick={() => handleTabClick('sign-up')}
                >
                    Sign Up
                </h2>

                {/* Icon */}
                {/* <div className="fadeIn first">
                    <img src="" id="icon" alt="User Icon" />
                </div> */}

                {/* Sign In Form */}
                {activeTab === 'sign-in' && (
                    <form onSubmit={handleSignInSubmit}>
                        <input
                            type="text"
                            id="login"
                            className="fadeIn second"
                            name="login"
                            placeholder="login"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <input
                            type="password"
                            id="password"
                            className="fadeIn third"
                            name="login"
                            placeholder="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
                )}

                {/* Sign Up Form */}
                {activeTab === 'sign-up' && (
                    <form onSubmit={handleSignUpSubmit}>
                        <input
                            type="text"
                            id="first-name"
                            className="fadeIn second"
                            name="first-name"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                        <input
                            type="text"
                            id="last-name"
                            className="fadeIn third"
                            name="last-name"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                        <input
                            type="text"
                            id="email"
                            className="fadeIn third"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <input
                            type="password"
                            id="password"
                            className="fadeIn third"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <input type="submit" className="fadeIn fourth" value="Sign Up" />
                    </form>
                )}

                {/* Remind Password */}
                <div id="formFooter">
                    <NavLink
                        className="underlineHover"
                        to="/forgot-password"
                        activeClassName="active"
                    >
                        Mot de passe oublié ?
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


