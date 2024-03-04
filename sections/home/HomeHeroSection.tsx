'use client';

import Image from 'next/image';

import './home-hero-section.css';

const HomeHeroSection = () => {
  return (
    <section
      className='home-hero-section'
      style={{
        backgroundImage: 'url(/img/home-hero-bg.webp)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className='home-hero-bg-overlay'></div>

      <div className='home-hero-content'>
        <div className='text-content'>
          <h1 className='home-hero-headline'>
            Small business lending made simple.
          </h1>

          <p className='home-hero-desc'>
            Optimize your cash flow and manage expenses with a revolving line of
            credit up to $150,000. Apply today without impacting your credit
            score.
          </p>

          <button className='apply-now-btn'>Apply Now</button>
        </div>

        <div className='image-content'>
          <Image
            className='image-content-img'
            src='/img/home-hero-img.webp'
            width={500}
            height={500}
            alt='Picture of the author'
          />
        </div>
      </div>

      {/* <div className='home-hero-content'>
        <h1 className='home-hero-headline'>
          Empower Your Business with Alternative Financing Solutions
        </h1>
        <h2 className='home-hero-sub-headline'>
          Flexible, Fast, and Tailored Funding for Small Businesses and Startups
        </h2>
        <p className='home-hero-desc'>
          At Kesef Capital Group, we understand that each business has unique
          financial needs. That's why we offer a wide range of alternative
          financing options designed to boost your cash flow and working capital
          without the constraints of traditional bank loans. From unsecured
          business funding to quick business loans, our goal is to help you
          navigate your business's financial journey with ease and confidence.
          Whether you're looking to get a business loan with no credit check,
          secure startup business funding, or explore the best small business
          loans for startups, our expert team is here to guide you every step of
          the way
        </p>

        <div className='home-hero-cta'>
          <button className='btn btn-secondary'>Explore Funding</button>
          <button className='btn btn-primary'>Get Funded</button>
        </div>
      </div> */}
    </section>
  );
};

export default HomeHeroSection;
