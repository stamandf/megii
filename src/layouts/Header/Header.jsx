import React from 'react';
import logo from '../../assets/images/logoWhite.svg';

function Header() {
    return (
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3 ">
              <div className="site-logo">
                <a href="index.html"><img className="site-logo__image" src={logo} alt="logo" /></a>
              </div>
            </div>
            <div className="col-9 text-right">
              <span className="d-inline-block d-lg-none"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white"></span></a></span>
              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li><a href="property.html" className="nav-link">Properties</a></li>
                  <li><a href="agents.html" className="nav-link">Brokers</a></li>
                  <li><a href="about.html" className="nav-link">Testimonials</a></li>
                  <li><a href="contact.html" className="nav-link">Contact Us</a></li>
                  <li><a href="#" className="nav-link">FR</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;