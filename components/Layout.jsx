import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Bazaar Buddies' : 'Bazaar  Buddies'}</title>
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Header />
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
