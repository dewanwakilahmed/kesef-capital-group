'use client';

// Import necessary modules
import { FC } from 'react';

// CSS Import
import './application-process-section.css';

interface ApplicationProcessItem {
  title: string;
  description: string;
}

interface ApplicationProcessProps {
  solutionTitle: string;
  applicationProcessContent: ApplicationProcessItem[];
}

const ApplicationProcessSection: FC<ApplicationProcessProps> = ({
  solutionTitle,
  applicationProcessContent,
}) => {
  return (
    <section className='application-process-section'>
      <h1 className='application-process-section-title'>{`Application Process of ${solutionTitle}`}</h1>

      <div className='application-process-section-content'>
        {applicationProcessContent.map((item, index) => (
          <div key={index} className='application-process-item'>
            <h2 className='application-process-item-title'>{item.title}</h2>

            <p className='application-process-item-description'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
