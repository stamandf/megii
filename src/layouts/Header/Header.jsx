import React, {useState} from 'react';
import logo from '../../assets/images/logoWhite.svg';

function Header() {
  const [isOpen, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    console.log('Clicked!');
    setMobileMenu(!isOpen);
  }
    return (
      <div className={isOpen ? "site-wrap offcanvas-menu active" : "site-wrap"} id="home-section">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3" onClick={toggleMenu}>
              <span className="d-inline-block icon-close2 text-black-50"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
              <li className="nav-item"><a href="property.html" className="nav-link">Properties</a></li>
              <li className="nav-item"><a href="agents.html" className="nav-link">Brokers</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">Testimonials</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
              <li className="nav-item"><a href="#" className="nav-link">FR</a></li>
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
                  <ul className="navbar-nav site-menu main-menu js-clone-nav ml-auto ">
                    <li className="nav-item"><a href="property.html" className="nav-link">Properties</a></li>
                    <li className="nav-item"><a href="agents.html" className="nav-link">Brokers</a></li>
                    <li className="nav-item"><a href="about.html" className="nav-link">Testimonials</a></li>
                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FR</a></li>
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