'use client';

// Import necessary modules
import { FC } from 'react';
import { Poppins } from 'next/font/google';

// CSS Import
import './eligibility-criteria-section.css';

// Font Import
const lato = Poppins({ subsets: ['latin'], weight: '600' });

interface EligibilityCriteriaContentItem {
  title: string;
  description: string;
}

interface EligibilityCriteriaProps {
  solutionTitle: string;
  eligibilityCriteriaContent: EligibilityCriteriaContentItem[];
}

const EligibilityCriteriaSection: FC<EligibilityCriteriaProps> = ({
  solutionTitle,
  eligibilityCriteriaContent,
}) => {
  return (
    <section className='eligibility-criteria-section'>
      <h1
        className={`eligibility-criteria-title ${lato.className}`}
      >{`Eligibility Criteria of ${solutionTitle}`}</h1>

      <div className='eligibility-criteria-content'>
        {eligibilityCriteriaContent.map((item, index) => (
          <div key={index} className='eligibility-criteria-item'>
            <h2 className='eligibility-criteria-item-title'>{item.title}</h2>
            <p className='eligibility-criteria-item-description'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EligibilityCriteriaSection;
