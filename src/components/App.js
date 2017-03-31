import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import '../styles/App.scss';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
