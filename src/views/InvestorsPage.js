import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import Image from '../components/elements/Image';
import Process from '../components/sections/investors/Process';

const InvestorsPage = () => {

  return (
    <>
      <GenericSection children={
        <>
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="300">
          <span className="text-color-primary">SmartLoans</span>
        </h1>
        <h3 className="m-0 mb-8 reveal-from-bottom" data-reveal-delay="500">
          Investing in Student Futures.
        </h3>
        </>
      } />
      <Process />
      {/* <FeaturesTiles /> */ }
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
      <Cta />
    </>
  );
}

export default InvestorsPage;
