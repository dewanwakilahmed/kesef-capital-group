'use client';

// Import necessary modules
import { FC } from 'react';
import { Poppins } from 'next/font/google';

// CSS Import
import './what-is-funding-solution-section.css';

// Font Import
const lato = Poppins({ subsets: ['latin'], weight: '600' });

interface WhatIsFundingSolutionSectionProps {
  fundingSolutionName: string;
  whatIsFundingSolution: string;
}

const WhatIsFundingSolutionSection: FC<WhatIsFundingSolutionSectionProps> = ({
  fundingSolutionName,
  whatIsFundingSolution,
}) => {
  return (
    <section className='what-is-funding-solution-section'>
      <h1
        className={`what-is-funding-solution-title ${lato.className}`}
      >{`What is ${fundingSolutionName}?`}</h1>

      <div className='what-is-funding-solution-content'>
        <p>{whatIsFundingSolution}</p>
      </div>
    </section>
  );
};

export default WhatIsFundingSolutionSection;
