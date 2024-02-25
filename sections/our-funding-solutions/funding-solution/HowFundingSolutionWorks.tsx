'use client';

// Import necessary modules
import { FC } from 'react';
import { Poppins } from 'next/font/google';

// CSS Import
import './how-funding-solution-works-section.css';

// Font Import
const lato = Poppins({ subsets: ['latin'], weight: '600' });

interface HowFundingSolutionWorksContentItem {
  title: string;
  description: string;
}

interface HowFundingSolutionWorksProps {
  fundingSolutionTitle: string;
  howFundingSolutionWorksContent: HowFundingSolutionWorksContentItem[];
}

const HowFundingSolutionWorks: FC<HowFundingSolutionWorksProps> = ({
  fundingSolutionTitle,
  howFundingSolutionWorksContent,
}) => {
  return (
    <section className='how-funding-solution-works-section'>
      <h1
        className={`how-funding-solution-works-title ${lato.className}`}
      >{`How ${fundingSolutionTitle} Works?`}</h1>

      <div className='how-funding-solution-works-content'>
        {howFundingSolutionWorksContent.map((item, index) => (
          <div key={index} className='how-funding-solution-works-item'>
            <h2 className='how-funding-solution-works-item-title'>
              {item.title}
            </h2>
            <p className='how-funding-solution-works-item-description'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowFundingSolutionWorks;
