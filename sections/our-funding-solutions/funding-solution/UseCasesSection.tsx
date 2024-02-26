'use client';

// Import necessary modules
import { FC } from 'react';

// CSS Import
import './use-cases-section.css';

interface UseCasesItem {
  title: string;
  description: string;
}

interface UseCasesProps {
  solutionTitle: string;
  useCasesContent: UseCasesItem[];
}

const UseCasesSection: FC<UseCasesProps> = ({
  solutionTitle,
  useCasesContent,
}) => {
  return (
    <section className='use-cases-section'>
      <h1 className='use-cases-section-title'>{`Use Cases of ${solutionTitle}`}</h1>

      <div className='use-cases-section-content'>
        {useCasesContent.map((item, index) => (
          <div key={index} className='use-cases-item'>
            <h2 className='use-cases-item-title'>{item.title}</h2>

            <p className='use-cases-item-description'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
