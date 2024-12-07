// Footer.jsx
import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import '../App.css';

const Footer = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <footer className={theme === 'dark' ? 'dark-theme footer' : 'light-theme footer'}>
      <p>Powered by</p>
      <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  );
}

export default Footer;
