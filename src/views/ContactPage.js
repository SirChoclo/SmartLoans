import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
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
