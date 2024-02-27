'use client';

// Import necessary modules
import { FC } from 'react';

// CSS Import
import './why-choose-kcg-section.css';

interface WhyChooseKCGSectionProps {
  solutionTitle: string;
  whyChooseKCGContent: string;
}

const WhyChooseKCGSection: FC<WhyChooseKCGSectionProps> = ({
  solutionTitle,
  whyChooseKCGContent,
}) => {
  return (
    <section className='why-choose-kcg-section'>
      <h1 className='why-choose-kcg-section-title'>{`What is ${solutionTitle}?`}</h1>

      <div className='why-choose-kcg-section-content'>
        <p className='why-choose-kcg-item why-choose-kcg-item-description'>
          {whyChooseKCGContent}
        </p>
      </div>
    </section>
  );
};

export default WhyChooseKCGSection;
