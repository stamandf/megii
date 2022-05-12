import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home.jsx';
import { useTranslation, Trans } from 'react-i18next';


function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
