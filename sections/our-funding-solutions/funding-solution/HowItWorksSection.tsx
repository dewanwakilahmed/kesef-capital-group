'use client';

// Import necessary modules
import { FC } from 'react';

// CSS Import
import './how-it-works-section.css';

interface HowItWorksItem {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  solutionTitle: string;
  howItWorksContent: HowItWorksItem[];
}

const HowItWorksSection: FC<HowItWorksSectionProps> = ({
  solutionTitle,
  howItWorksContent,
}) => {
  return (
    <section className='how-it-works-section'>
      <h1 className='how-it-works-section-title'>{`How ${solutionTitle} Works?`}</h1>

      <div className='how-it-works-section-content'>
        {howItWorksContent.map((item, index) => (
          <div key={index} className='how-it-works-item'>
            <h2 className='how-it-works-item-title'>{item.title}</h2>

            <p className='how-it-works-item-description'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
