import React from 'react';
import facebookLogo from '../../assets/images/facebook.png';
import instagramLogo from '../../assets/images/instagram.png';
import twitterLogo from '../../assets/images/twitter.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                <a href='https://www.facebook.com'><img className='logo' src={facebookLogo} alt="Facebook logo" /></a>
                
                </li>
                <li>
                <a href='https://www.instagram.com'><img className='logo' src={instagramLogo} alt="instagram logo" /></a>
                </li>
                <li>
                <a href='https://www.twitter.com'><img className='logo' src={twitterLogo} alt="twitter logo" /></a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;