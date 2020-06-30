import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NewFooter from '../components/layout/NewFooter';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    {/* <Footer /> */}
    {/* <NewFooter /> */}
  </>
);

export default LayoutDefault;  