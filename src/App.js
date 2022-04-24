import React from 'react';
import Header from './layouts/Header/Header.jsx';
import OurTeam from './layouts/OurTeam/OurTeam.jsx';
import Footer from './layouts/Footer/Footer.jsx';
import MainCover from './layouts/MainCover/MainCover.jsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <MainCover/>
    <OurTeam/>
    <Footer/>
    </div>
  );
}

export default App;
