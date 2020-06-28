import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const StudentPains = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top',
  );

  return (
    <>
      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="300">
        <span className="text-color-primary">Smarter Student Loans</span>
      </h1>
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Are you using a private lender?
                  </h3>
                  <p className="m-0">
                    Traditional private lenders stink. Partner with SmartLoans who invests in YOU by offering career services, financial planning, and networking opportunities included with your loan.
                  </p>
                </div>
                <div
                  className={
                                classNames(
                                  'split-item-image center-content-mobile reveal-from-bottom',
                                  imageFill && 'split-item-image-fill',
                                )
}
                  data-reveal-container=".split-item"
                >
                  <Image
                    src={require('../../../assets/images/partnership.svg')}
                    alt="Pains Split 01"
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Having trouble keeping track of your loans?
                  </h3>
                  <p className="m-0">
                    One webportal to easily see all your loans and remind you when you have to pay.
                    {' '}
                  </p>
                </div>
                <Image
                  src={require('../../../assets/images/central.svg')}
                  alt="Pains Split 02"
                  width={528}
                  height={396}
                />
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Need someone to consult about student loans?
                  </h3>
                  <p className="m-0">
                    We have spent a lot of time thinking and researching student loans. Shoot us a question and let us help you out.
                  </p>
                </div>
                <Image
                  src={require('../../../assets/images/consultation.svg')}
                  alt="Pains Split Consultation"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

StudentPains.propTypes = propTypes;
StudentPains.defaultProps = defaultProps;

export default StudentPains;
