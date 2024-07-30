import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import Navbar from '@/components/Navbar';
import HamburgerMenu from '@/components/HamburgerMenu';

import Footer from '@/components/Footer';
import { MenuProvider, useMenu } from '@/context/menu-context';
import { ThemeProvider } from '@/context/ThemeContext';
import ScrollToTopButton from '@/components/ScroolToTopButton';
import Cookies from '@/components/Cookies';

export default function App({ Component, pageProps }: AppProps) {
  const { currentUser } = useMenu();

  return (
    <>
      <ThemeProvider>
          <MenuProvider>
            <Navbar />
            {!currentUser && <HamburgerMenu />}
            <ScrollToTopButton />
            <Component
              {...pageProps}
              className="min-h-[calc(100vh-175px)"
            />
            <Cookies />
            <Footer />
          </MenuProvider>
       
      </ThemeProvider>
    </>
  );
}
