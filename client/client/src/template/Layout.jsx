import Header from './Header';
import FooterMenu from './FooterMenu';
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