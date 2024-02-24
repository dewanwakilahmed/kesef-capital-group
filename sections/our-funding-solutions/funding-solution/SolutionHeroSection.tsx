'use client';

// Necessary Modules Imports
import { FC } from 'react';

// CSS Import
import './solution-hero-section.css';

interface SolutionHeroSectionProps {
  introduction: string;
}

const SolutionHeroSection: FC<SolutionHeroSectionProps> = ({
  introduction,
}) => {
  return (
    <section className='solution-hero-section'>
      <p>{introduction}</p>
    </section>
  );
};

export default SolutionHeroSection;
