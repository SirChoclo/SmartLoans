import React from 'react';
// import sections

import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import Process from '../components/sections/investors/Process';
import InvestorCall from '../components/sections/investors/InvestorCall';


const InvestorsPage = () => {

  return (
    <>
      <GenericSection children={
        <>
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="300">
          <span className="text-color-primary">SmartLoans</span>
        </h1>
        <h3 className="m-0 mb-8 reveal-from-bottom" data-reveal-delay="500">
          Investing in Students' Futures
        </h3>
        </>
      } />
      <Process />
      {/* <FeaturesTiles /> */ }
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
      <InvestorCall />
      <Cta />
    </>
  );
}

export default InvestorsPage;
