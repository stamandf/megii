import React from 'react';
import NavItems from '../NavItems/NavItems';
import { useTranslation } from 'react-i18next';

function Footer() {
  const today = new Date();
  const {t, i18n } = useTranslation();

    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="text-white h5 mb-3">Maison Eros Greatti Immobilier</h3>
              </div>
              <div className="col-md-3">
                <h3 className="text-white h5 mb-3">{t("footer.siteLinks")}</h3>
                <ul className="list-unstyled menu-arrow">
                  <NavItems/>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="text-white h5 mb-3">{t("footer.socials")}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolores deserunt, obcaecati fuga quo. Autem explicabo sapiente, maiores.</p>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright &copy; {today.getFullYear()} {t("footer.copyright")} | MEGII
                </p>
                </div>
              </div>
            </div>
          </div>
      </footer>
  
    );
}

export default Footer;