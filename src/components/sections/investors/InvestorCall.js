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

const InvestorCall = ({
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
    'features-split-inner section-inner center-content',
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
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <h1>Investors, listen up!</h1>
              <p>We have an exciting new way to invest.</p>
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                    Control over your investment.
                  </h3>
                  <p className="m-0">
                    Your money will directly fund students <br/> seeking loans for costly higher education expenses.<br/>
                  </p>
                  <br/>
                  <p>
                    Join our platform to view student profiles and <br/> choose the funds whose story speaks most to you.<br/>
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
                    Competitive returns.
                  </h3>
                  <p className="m-0">
                    When students start paying back their loans,{' '}
                    investors are issued monthly payments of principal and interest.{' '}
                    Students project to earn income that could yield between 5 - 8% of returns for investors.
                  </p>
                  <br/>
                  <p>
                    It's not only a socially impactful investment. <br/>
                    It's a smart investment.
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
                    Join our community.
                  </h3>
                  <p className="m-0">
                    SmartLoans holds events, not only for students, but for investors too. By investing, you automatically receive membership to our network and community benefits.
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

InvestorCall.propTypes = propTypes;
InvestorCall.defaultProps = defaultProps;

export default InvestorCall;
