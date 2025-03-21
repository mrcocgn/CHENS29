import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header';
import FooterMenu from './components/FooterMenu';
import CheckoutButton from './components/CheckoutButton';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <CheckoutButton />
      </main>
      <FooterMenu />
      <Analytics />
    </>
  );
}

export default Layout;