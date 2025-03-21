import Header from './components/Header';
import FooterMenu from './components/FooterMenu';
import CheckoutButton from './components/CheckoutButton';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <CheckoutButton />
      </main>
      <FooterMenu />
    </>
  );
}

export default Layout;