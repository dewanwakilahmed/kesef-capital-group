'use client';

// Import necessary modules
import { FC } from 'react';
import { Poppins } from 'next/font/google';

// CSS Import
import './use-cases-of-funding-solution-section.css';

// Font Import
const lato = Poppins({ subsets: ['latin'], weight: '600' });

interface UseCasesOfFundingSolutionContentItem {
  title: string;
  description: string;
}

interface UseCasesOfFundingSolutionProps {
  fundingSolutionTitle: string;
  useCasesOfFundingSolutionContent: UseCasesOfFundingSolutionContentItem[];
}

const UseCasesOfFundingSolution: FC<UseCasesOfFundingSolutionProps> = ({
  fundingSolutionTitle,
  useCasesOfFundingSolutionContent,
}) => {
  return (
    <section className='use-cases-of-funding-solution-section'>
      <h1
        className={`use-cases-of-funding-solution-title ${lato.className}`}
      >{`Use Cases of ${fundingSolutionTitle}`}</h1>

      <div className='use-cases-of-funding-solution-content'>
        {useCasesOfFundingSolutionContent.map((item, index) => (
          <div key={index} className='use-cases-of-funding-solution-item'>
            <h2 className='use-cases-of-funding-solution-item-title'>
              {item.title}
            </h2>
            <p className='use-cases-of-funding-solution-item-description'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesOfFundingSolution;
