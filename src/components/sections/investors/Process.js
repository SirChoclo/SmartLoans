import React from 'react';
import classNames from 'classnames';
import { ProcessProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';

const propTypes = {
  ...ProcessProps.types
}

const defaultProps = {
  ...ProcessProps.defaults
}
const Process = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>
          <div className="tiles-item">
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image">
                  <Image
                    src={require('../../../assets/images/feature-tile-icon-01.svg')}
                    alt="Features tile icon 01"
                    width={64}
                    height={64} />
                </div>
              </div>
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                Investors Sponsor Students
                </h4>
                <p className="m-0 text-sm">
                Diversify your portfolio with investments in students with future earning potential.
                </p>
              </div>
            </div>
          </div>
          <div className="tiles-item reveal-from-bottom">
            <div className="tiles-item-inner">
              <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('../../../assets/images/feature-tile-icon-01.svg')}
                    alt="Features tile icon 01"
                    width={64}
                    height={64} />
                </div>
              </div>
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                  Students Apply & <br/> Get Loans
                </h4>
                <p className="m-0 text-sm">
                  Your investments are distributed to students as loans. Students can apply today to get a quote.
                </p>
              </div>
            </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Pay It Forward
                  </h4>
                  <p className="m-0 text-sm">
                    Students pay back their loans and investors are paid back too.
                  </p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Process.propTypes = propTypes;
Process.defaultProps = defaultProps;

export default Process;
