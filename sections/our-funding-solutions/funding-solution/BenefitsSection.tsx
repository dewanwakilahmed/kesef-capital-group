'use client';

// Import necessary modules
import { FC } from 'react';

// CSS Import
import './benefits-section.css';

interface BenefitsItem {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  solutionTitle: string;
  benefitsContent: BenefitsItem[];
}

const BenefitsSection: FC<BenefitsSectionProps> = ({
  solutionTitle,
  benefitsContent,
}) => {
  return (
    <section className='benefits-section'>
      <h1 className='benefits-section-title'>{`Benefits of ${solutionTitle}`}</h1>

      <div className='benefits-section-content'>
        {benefitsContent.map((item, index) => (
          <div key={index} className='benefits-item'>
            <h2 className='benefits-item-title'>{item.title}</h2>

            <p className='benefits-item-description'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
