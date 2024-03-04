'use client';

// CSS Import
import './home-page.css';

// Sections Import
import HomeHeroSection from '@/sections/home/HomeHeroSection';

const HomePage = () => {
  return (
    <main className='home-page'>
      <HomeHeroSection />
    </main>
  );
};

export default HomePage;
