import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

function NavItems(props) {
    const { toggleMenu, switchLanguage } = props;
    const { t, i18n } = useTranslation();



    return (
        <>
            <li className="nav-item"><a href="properties.html" className="nav-link" onClick={toggleMenu}>{t("navMenu.properties")}</a></li>
            <li className="nav-item"><a href="#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.brokers")}</a></li>
            <li className="nav-item"><a href="#testimonials" className="nav-link" onClick={toggleMenu}>{t("navMenu.testimonials")}</a></li>
            <li className="nav-item"><a href="#brokers" className="nav-link" onClick={toggleMenu}>{t("navMenu.contact")}</a></li>
            <li className="nav-item"><a href="#" className="nav-link" onClick={switchLanguage}>{t("navMenu.lang")}</a></li>
        </>
    );


} export default NavItems;