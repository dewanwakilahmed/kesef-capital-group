'use client';

import Link from 'next/link';

// CSS Import
import './header-section.css';

// Icons Import
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderSection = () => {
  return (
    <header className='header-section'>
      <div className='header-content'>
        <div className='header-left'>
          <GiHamburgerMenu className='side-menu-btn' />

          <div className='company-logo'>
            <Link href='/'>KCG</Link>
          </div>
        </div>

        <div className='header-right'>
          <nav className='navbar-left'>
            <ul className='navbar-ul'>
              <li className='navbar-li'>
                <Link href='/lending-solutions'>Lending Solutions</Link>
              </li>

              <li className='navbar-li'>
                <Link href='/resources'>Resources</Link>
              </li>

              <li className='navbar-li'>
                <Link href='/about-us'>About Us</Link>
              </li>
            </ul>
          </nav>

          <nav className='navbar-right'>
            <ul className='navbar-ul'>
              <li className='navbar-li'>
                <span className='company-phone-no'>(888) 269-4246</span>
              </li>

              <li className='navbar-li'>
                <button className='navbar-item btn btn-secondary msg-us-btn'>
                  <Link href='/message-us'>Message Us</Link>
                </button>
              </li>

              <li className='navbar-li'>
                <button className='navbar-item btn btn-primary'>
                  <Link href='/apply-now'>Apply Now</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
