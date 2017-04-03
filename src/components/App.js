import React from 'react';

import ContentBody from './layout/ContentBody';
import Footer from './layout/Footer';
import Header from './layout/Header';
import '../styles/App.scss';

export default (props) => {
  return (
    <div className='container'>
      <Header />
      <main>
        <ContentBody page={props.children} />
      </main>
      <Footer />
    </div>
  )
}
