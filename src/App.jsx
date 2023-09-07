import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

import css from './styles/App.module.scss';
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga, por ejemplo, 2 segundos
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`bg-primary ${css.container}`}>
      {loading ? (
        
        <Loader />
      ) : (
        <>
          <Header />       
          <Portfolio />      
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
