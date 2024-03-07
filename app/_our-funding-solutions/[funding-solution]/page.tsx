'use client';

// Necessary Modules Imports
import { usePathname } from 'next/navigation';

// Content Import
import FundingSolutionsContent from '@/public/content/our-funding-solutions/FundingSolutionsContent';

// Section Imports
import SolutionHeroSection from '@/sections/our-funding-solutions/funding-solution/SolutionHeroSection';
import WhatIsItSection from '@/sections/our-funding-solutions/funding-solution/WhatIsItSection';
import HowItWorksSection from '@/sections/our-funding-solutions/funding-solution/HowItWorksSection';
import BenefitsSection from '@/sections/our-funding-solutions/funding-solution/BenefitsSection';
import UseCasesSection from '@/sections/our-funding-solutions/funding-solution/UseCasesSection';
import ConsiderationsSection from '@/sections/our-funding-solutions/funding-solution/ConsiderationsSection';
import EligibilityCriteriaSection from '@/sections/our-funding-solutions/funding-solution/EligibilityCriteriaSection';
import ApplicationProcessSection from '@/sections/our-funding-solutions/funding-solution/ApplicationProcessSection';
import WhyChooseKCGSection from '@/sections/our-funding-solutions/funding-solution/WhyChooseKCGSection';

const FundingSolutionPage = () => {
  // Find funding solution from URL for the page
  const url = usePathname();
  const solutionId = url.split('/').pop();

  // Find funding solution from content
  const fundingSolution = FundingSolutionsContent.find(
    (solution) => solution.id === solutionId
  );

  if (!fundingSolution) {
    return <div>Sorry, funding solution not found.</div>;
  }

  return (
    <main className={`funding-solution-page ${fundingSolution.id}`}>
      {/* <SolutionHeroSection introduction={fundingSolution.intro} /> */}
      <WhatIsItSection
        solutionTitle={fundingSolution.name}
        whatIsItContent={fundingSolution.whatIs}
      />
      <HowItWorksSection
        solutionTitle={fundingSolution.name}
        howItWorksContent={fundingSolution.howItWorks}
      />
      <BenefitsSection
        solutionTitle={fundingSolution.name}
        benefitsContent={fundingSolution.benefits}
      />
      <UseCasesSection
        solutionTitle={fundingSolution.name}
        useCasesContent={fundingSolution.useCases}
      />
      <ConsiderationsSection
        solutionTitle={fundingSolution.name}
        considerationsContent={fundingSolution.considerations}
      />
      <EligibilityCriteriaSection
        solutionTitle={fundingSolution.name}
        eligibilityCriteriaContent={fundingSolution.eligibilityCriteria}
      />
      <ApplicationProcessSection
        solutionTitle={fundingSolution.name}
        applicationProcessContent={fundingSolution.applicationProcess}
      />
      <WhyChooseKCGSection
        solutionTitle={fundingSolution.name}
        whyChooseKCGContent={fundingSolution.whyChooseKCG}
      />
    </main>
  );
};

export default FundingSolutionPage;
