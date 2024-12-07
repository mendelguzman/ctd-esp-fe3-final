import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={theme === 'dark' ? 'dark-theme contact-container' : 'light-theme contact-container'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <p></p>
      <Form />
    </div>
  );
};

export default Contact;
