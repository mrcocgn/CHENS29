import Header from './components/Header';
import FooterMenu from './components/FooterMenu';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <FooterMenu />
    </>
  );
}

export default Layout;