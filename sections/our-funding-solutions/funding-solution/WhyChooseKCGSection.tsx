'use client';

// Import necessary modules
import { FC } from 'react';
import { Poppins } from 'next/font/google';

// CSS Import
import './why-choose-kcg-section.css';

// Font Import
const lato = Poppins({ subsets: ['latin'], weight: '600' });

interface WhyChooseKCGProps {
  solutionTitle: string;
  whyChooseKCG: string;
}

const WhyChooseKCGSection: FC<WhyChooseKCGProps> = ({
  solutionTitle,
  whyChooseKCG,
}) => {
  return (
    <section className='why-choose-kcg-section'>
      <h1
        className={`why-choose-kcg-title ${lato.className}`}
      >{`Why Choose Kesef Capital's ${solutionTitle}?`}</h1>

      <div className='why-choose-kcg-content'>
        <p>{whyChooseKCG}</p>
      </div>
    </section>
  );
};

export default WhyChooseKCGSection;
