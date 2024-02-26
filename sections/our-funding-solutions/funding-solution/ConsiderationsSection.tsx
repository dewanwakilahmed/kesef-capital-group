'use client';

// Import necessary modules
import { FC } from 'react';
import { Poppins } from 'next/font/google';

// CSS Import
import './considerations-section.css';

interface ConsiderationsContentItem {
  title: string;
  description: string;
}

interface ConsiderationsProps {
  solutionTitle: string;
  considerationsContent: ConsiderationsContentItem[];
}

const ConsiderationsSection: FC<ConsiderationsProps> = ({
  solutionTitle,
  considerationsContent,
}) => {
  return (
    <section className='considerations-section'>
      <h1 className='considerations-section-title'>{`Considerations of ${solutionTitle}`}</h1>

      <div className='considerations-section-content'>
        {considerationsContent.map((item, index) => (
          <div key={index} className='considerations-item'>
            <h2 className='considerations-item-title'>{item.title}</h2>
            <p className='considerations-item-description'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsiderationsSection;
