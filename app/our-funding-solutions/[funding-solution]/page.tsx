'use client';

// Necessary Modules Imports
import { usePathname } from 'next/navigation';

// Content Import
import FundingSolutionsContent from '@/public/content/our-funding-solutions/FundingSolutionsContent';

// Section Imports
import SolutionHeroSection from '@/sections/our-funding-solutions/funding-solution/SolutionHeroSection';
import WhatIsFundingSolutionSection from '@/sections/our-funding-solutions/funding-solution/WhatIsFundingSolutionSection';
import HowFundingSolutionWorks from '@/sections/our-funding-solutions/funding-solution/HowFundingSolutionWorks';
import BenefeitsOfFundingSolution from '@/sections/our-funding-solutions/funding-solution/BenefitsOfFundingSolution';

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
      <SolutionHeroSection introduction={fundingSolution.intro} />
      <WhatIsFundingSolutionSection
        fundingSolutionName={fundingSolution.name}
        whatIsFundingSolution={fundingSolution.whatIs}
      />
      <HowFundingSolutionWorks
        fundingSolutionTitle={fundingSolution.name}
        howFundingSolutionWorksContent={fundingSolution.howItWorks}
      />
      <BenefeitsOfFundingSolution
        fundingSolutionTitle={fundingSolution.name}
        BenefitsOfFundingSolutionContent={fundingSolution.benefits}
      />
    </main>
  );
};

export default FundingSolutionPage;
