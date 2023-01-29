import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect, useContext } from 'react';
import { Store } from '../utils/Store';
import 'react-toastify/dist/ReactToastify.css';

function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + ' - Bazaar Buddies' : 'Bazaar  Buddies'}</title>
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Header carItemsCount={cartItemsCount} />
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex justify-center items-center h-12 shadow-inner">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
