'use client';

// Import necessary modules
import { FC } from 'react';

// CSS Import
import './eligibility-criteria-section.css';

interface EligibilityCriteriaItem {
  title: string;
  description: string;
}

interface EligibilityCriteriaProps {
  solutionTitle: string;
  eligibilityCriteriaContent: EligibilityCriteriaItem[];
}

const EligibilityCriteriaSection: FC<EligibilityCriteriaProps> = ({
  solutionTitle,
  eligibilityCriteriaContent,
}) => {
  return (
    <section className='eligibility-criteria-section'>
      <h1 className='eligibility-criteria-section-title'>{`Eligibility Criteria of ${solutionTitle}`}</h1>

      <div className='eligibility-criteria-section-content'>
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
