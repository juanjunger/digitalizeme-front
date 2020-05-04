import React from 'react';

import Routes from './routes';

import './assets/css/main.css';
import './assets/css/responsive.css';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div id="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
