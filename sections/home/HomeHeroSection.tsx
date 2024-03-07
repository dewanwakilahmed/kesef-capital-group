'use client';

import Image from 'next/image';
import Link from 'next/link';

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
            Small business lending made simple
          </h1>

          <p className='home-hero-desc'>
            Join thousands of businesses that have simplified financing, boosted
            sales, and improved the customer experience. Increase your bottom
            line — one moment at a time
          </p>

          <button className='home-hero-cta btn btn-primary'>
            <Link href='/apply-now'>Apply Now</Link>
          </button>
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
    </section>
  );
};

export default HomeHeroSection;
