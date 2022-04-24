import React from 'react';
import erosPortrait from '../../assets/images/erosPortrait.jpg';
import denisPortrait from '../../assets/images/denisPortrait.jpg';

function OurTeam() {
    return (
        <section className="site-section">
            <div className="container justify-content-center">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 text-center">
                        <h3 className="heading-29201 text-center">Our Team</h3>
                        
                        <p className="mb-5">Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-5 mb-md-0">
                    <div className="person-29381">
                    <div className="media-39912">
                        <img src={erosPortrait} alt="Image" className="img-fluid"/>
                    </div>
                    <h3><a href="#">Eros Greatti</a></h3>
                    <span className="meta d-block mb-4">Certified Residential and Commercial Real Estate Broker AEO </span>
                    <div className="social-32913">
                        <a href="#"><span className="icon-facebook"></span></a>
                        <a href="#"><span className="icon-instagram"></span></a>
                        <a href="#"><span className="icon-phone"></span></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5 mb-md-0 invisible">
                    <div className="person-29381">
                    <div className="media-39912">
                        <img src="../../assets/images/person_3.jpg" alt="Image" className="img-fluid"/>
                    </div>
                    <h3><a href="#">Melinda David</a></h3>
                    <span className="meta d-block mb-4">10 Properties</span>
                    <div className="social-32913">
                        <a href="#"><span className="icon-facebook"></span></a>
                        <a href="#"><span className="icon-twitter"></span></a>
                        <a href="#"><span className="icon-instagram"></span></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 ms-auto mb-5 mb-md-0">
                    <div className="person-29381">
                    <div className="media-39912">
                        <img src={denisPortrait} alt="Image" className="img-fluid"/>
                    </div>
                    <h3><a href="#">Denis Cherkashin</a></h3>
                    <span className="meta d-block mb-4">Residential and Commercial Real Estate Broker</span>
                    <div className="social-32913">
                        <a href="#"><span className="icon-facebook"></span></a>
                        <a href="#"><span className="icon-instagram"></span></a>
                        <a href="#"><span className="icon-phone"></span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    );
}
export default OurTeam;