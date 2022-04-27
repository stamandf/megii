import React from 'react'

function MobileMenu() {
    return (
        <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
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
    );
}

export default MobileMenu;