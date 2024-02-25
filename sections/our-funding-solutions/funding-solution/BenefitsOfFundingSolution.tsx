'use client';

// Import necessary modules
import { FC } from 'react';
import { Poppins } from 'next/font/google';

// CSS Import
import './benefits-of-funding-solution-section.css';

// Font Import
const lato = Poppins({ subsets: ['latin'], weight: '600' });

interface BenefitsOfFundingSolutionContentItem {
  title: string;
  description: string;
}

interface BenefitsOfFundingSolutionProps {
  fundingSolutionTitle: string;
  BenefitsOfFundingSolutionContent: BenefitsOfFundingSolutionContentItem[];
}

const BenefitsOfFundingSolution: FC<BenefitsOfFundingSolutionProps> = ({
  fundingSolutionTitle,
  BenefitsOfFundingSolutionContent,
}) => {
  return (
    <section className='benefits-of-funding-solution-section'>
      <h1
        className={`benefits-of-funding-solution-title ${lato.className}`}
      >{`Benefits of ${fundingSolutionTitle}`}</h1>

      <div className='benefits-of-funding-solution-content'>
        {BenefitsOfFundingSolutionContent.map((item, index) => (
          <div key={index} className='benefits-of-funding-solution-item'>
            <h2 className='benefits-of-funding-solution-item-title'>
              {item.title}
            </h2>
            <p className='benefits-of-funding-solution-item-description'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsOfFundingSolution;
