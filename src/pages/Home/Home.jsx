import React from 'react';
import Header from '../../layouts/Header/Header';
import MainCover from '../../layouts/MainCover/MainCover';
import OurTeam from '../../layouts/OurTeam/OurTeam';
import Footer from '../../layouts/Footer/Footer';

function Home() {
    return (
        <div className="site-wrap" id="home-section" >
            <Header/>
            <MainCover/>
            <OurTeam/>
            <Footer/>
        </div>
       
    );
}
export default Home;