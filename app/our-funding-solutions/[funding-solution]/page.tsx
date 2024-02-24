'use client';

// Necessary Modules Imports
import { usePathname } from 'next/navigation';

// Content Import
import FundingSolutionsContent from '@/public/content/our-funding-solutions/FundingSolutionsContent';

// Section Imports
import SolutionHeroSection from '@/sections/our-funding-solutions/funding-solution/SolutionHeroSection';

const FundingSolutionPage = () => {
  // Find funding solution from URL for the page
  const url = usePathname();
  const solutionId = url.split('/').pop();

  // Find funding sosolution from content
  const fundingSolution = FundingSolutionsContent.find(
    (solution) => solution.id === solutionId
  );

  if (!fundingSolution) {
    return <div>Sorry, funding solution not found.</div>;
  }

  return (
    <main className={`funding-solution-page ${fundingSolution.id}`}>
      <SolutionHeroSection introduction={fundingSolution.intro} />
      <div>Item 2</div>
    </main>
  );
};

export default FundingSolutionPage;
