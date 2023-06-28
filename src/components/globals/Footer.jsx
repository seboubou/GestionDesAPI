import React, { useEffect } from 'react';
import facebookLogo from '../../assets/images/facebook.png';
import instagramLogo from '../../assets/images/instagram.png';
import twitterLogo from '../../assets/images/twitter.png';
import MenuBurger from "../pages/MenuBurger";
// import NavBarSeven from '../globals/NavBarSeven';

const Footer = () => {
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const footer = document.querySelector(".footer");
  //   const windowHeight = window.innerHeight;
  //   const documentHeight = document.documentElement.scrollHeight;
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   if (scrollTop + windowHeight >= documentHeight) {
  //     footer.style.visibility = "visible"; // Afficher le footer lorsque l'utilisateur est en bas de la page
  //   } else {
  //     footer.style.visibility = "hidden"; // Masquer le footer en dehors de la position basse de la page
  //   }
  // };

  return (
    <main className="container">
      <div>
      {/* <NavBarSeven /> */}
      <MenuBurger/>
      </div>
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
        <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.facebook.com">
              <img src={facebookLogo} alt="Facebook"  className="social-icon__logo" />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.twitter.com">
              <img src={twitterLogo} alt="Twitter"  className="social-icon__logo" />
            </a>
          </li>
          
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.instagram.com">
              <img src={instagramLogo} alt="Instagram"  className="social-icon__logo" />
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
          <li class="menu__item"><a class="menu__link" href="#">About</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

        </ul>
        <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default Footer;






