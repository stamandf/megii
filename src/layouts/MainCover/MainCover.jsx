import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MainCover.scss';

function MainCover() {
  const [buttonPressed, setButton] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleButton = () => {
    setButton(!buttonPressed);
  }

    return (

        <div className="ftco-blocks-cover-1">
        
        <section className="site-section-cover overlay d-flex align-items-center justify-content-center" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-7">
                <h1 className="mb-4 text-white">Maison Eros <span className="text-primary">Great</span>ti <br/> Immobilier inc.</h1>
                <div className="d-flex media-38289 justify-content-around mb-5">
                  <p><a href="#" className="btn btn-primary text-white px-4 py-3" onClick={toggleButton}>{buttonPressed ? t("message.button1") : t("message.button2")}</a></p>
                  {/* <p><a href="#" className="btn btn-primary text-white px-4 py-3"onClick={toggleButton}>{buttonPressed ? "Stay Tuned!" : "Under Construction"}</a></p> */}
                  {/* <p><a href="#" className="btn btn-primary text-white px-4 py-3">View Properties</a></p> */}
                </div>
              </div>
            </div>
          </div> 

          <div className="wrapper">
            <div data-stellar-background-ratio="0.5" className="backgroundImg1"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg2"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg3"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg4"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg5"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg6"></div>
            <div data-stellar-background-ratio="0.5" className="backgroundImg7"></div>
          </div>

        </section>  
      </div>
    );
}

export default MainCover;