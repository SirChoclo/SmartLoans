import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';

const ContactPage = () => {

  return (
    <>
    <GenericSection children={
      <>
      <h2>Get in touch with us!</h2>
      <p>If you'd like to learn more, we'd love to hear from you</p>
      </>
    }/>
    <Cta />
    </>
  );
}
export default ContactPage;
