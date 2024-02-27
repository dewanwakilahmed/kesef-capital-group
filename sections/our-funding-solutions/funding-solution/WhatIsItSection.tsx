'use client';

// Import necessary modules
import { FC } from 'react';

// CSS Import
import './what-is-it-section.css';

interface WhatIsItSectionProps {
  solutionTitle: string;
  whatIsItContent: string;
}

const WhatIsItSection: FC<WhatIsItSectionProps> = ({
  solutionTitle,
  whatIsItContent,
}) => {
  return (
    <section className='what-is-it-section'>
      <h1 className='what-is-it-section-title'>{`What is ${solutionTitle}?`}</h1>

      <div className='what-is-it-section-content'>
        <p className='what-is-it-item what-is-it-item-description'>
          {whatIsItContent}
        </p>
      </div>
    </section>
  );
};

export default WhatIsItSection;
