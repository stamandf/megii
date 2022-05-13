import React from 'react';
import NavItems from '../NavItems/NavItems';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logoWhite.svg';
import './Footer.scss';

function Footer() {
  const today = new Date();
  const {t, i18n } = useTranslation();

  // <div className="row">
  // <div className='col-md-5'>
  //   <img className='footer-logo' src={logo} alt="logo" />
  //   </div>
  // </div>
    return (
        <footer className="site-footer">
          <div className="container">

            <div className="row">
              <div className="col-md-4">
                <h3 className="text-white h5 mb-3">Maison Eros Greatti Immobilier</h3>
                <p>
                {t("footer.address1")}
                <br/>
                {t("footer.address2")}
                <br/>
                Canada
                </p>
              </div>
              <div className="col-md-3">
                <h3 className="text-white h5 mb-3">{t("footer.siteLinks")}</h3>
                <ul className="list-unstyled menu-arrow">
                  <NavItems/>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="text-white h5 mb-3">{t("footer.ourMissionTitle")}</h3>
                <p className="mission-text">{t("footer.ourMissionText")}</p>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                {/* All rights reserved | This template is made with ♥︎ Colorlib by https://colorlib.com */}
                Copyright &copy; {today.getFullYear()} {t("footer.copyright")} | MEGII
                </p>
                <img className="footer-logo" src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
      </footer>
  
    );
}

export default Footer;