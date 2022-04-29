import React, {useState, useEffect} from 'react';
import logo from '../../assets/images/logoWhite.svg';
import { useTranslation, Trans } from 'react-i18next';

function Header() {
  const [isOpen, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  console.log('language = ', language);

  const switchLanguage = () => {
    console.log('Switch language!');
    setLanguage(language === 'en' ? 'fr' : 'en');
    console.log('Switched to....', language);
    console.log('resolved language = ', i18n.resolvedLanguage);
    console.log('i18n.language = ', i18n.language);
    i18n.changeLanguage(language);
    console.log('After change language...');
    console.log('resolved language = ', i18n.resolvedLanguage);
    console.log('i18n.language = ', i18n.language);

  }

  const toggleMenu = () => {
    setMobileMenu(!isOpen);
  }

  const closeOnScroll = () => {
    if (window.scrollY > 100 && isOpen) {
      setMobileMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', closeOnScroll);
    return () => {
      window.removeEventListener('scroll', closeOnScroll);
    }
  },[isOpen]);

    return (
      <div className={isOpen ? "offcanvas-menu active" : ""}>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3" onClick={toggleMenu}>
              <span className="d-inline-block icon-close2 text-black-50"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
              <li className="nav-item"><a href="properties.html" className="nav-link" onClick={toggleMenu}>{t("navMenu.properties")}</a></li>
              <li className="nav-item"><a href="#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.brokers")}</a></li>
              <li className="nav-item"><a href="#testimonials" className="nav-link" onClick={toggleMenu}>{t("navMenu.testimonials")}</a></li>
              <li className="nav-item"><a href="#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.contact")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link" onClick={switchLanguage}>FR</a></li>
            </ul>
          </div>
        </div>
        <header className="site-navbar site-navbar-target" role="banner">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-3 ">
                <div className="site-logo">
                  <a href="index.html"><img className="site-logo__image" src={logo} alt="logo" /></a>
                </div>
              </div>
              <div className="col-9 text-right">
                <span className="d-inline-block d-lg-none"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white" onClick={toggleMenu}><span className="icon-menu h3 text-white"></span></a></span>
                <nav className="navbar navbar-expand-lg site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav site-menu main-menu js-clone-nav ml-auto" >
                    <li className="nav-item"><a href="properties.html" className="nav-link">{t("navMenu.properties")}</a></li>
                    <li className="nav-item"><a href="#brokers" className="nav-link">{t("navMenu.brokers")}</a></li>
                    <li className="nav-item"><a href="#testimonials" className="nav-link">{t("navMenu.testimonials")}</a></li>
                    <li className="nav-item"><a href="#brokers" className="nav-link">{t("navMenu.contact")}</a></li>
                    <li className="nav-item"><a href="#" className="nav-link" onClick={switchLanguage}>FR</a></li>
                  </ul>
                </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default Header;