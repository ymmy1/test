import React, { useEffect } from 'react';

import '../styles/css/education.css';
import bg from '../assets/ed.png';
import harvard from '../assets/h-logo.png';
import uw from '../assets/uw-logo.png';
import h from '../assets/h-logo-sm.png';
import u from '../assets/uw-logo-sm.jpg';

import CS50 from '../assets/CS50.png';
import CS50W from '../assets/CS50W.png';
import UWC from '../assets/UW_certificate.jpg';
import MPA from '../assets/MPA-Internship-Completion-Certificate-Oleg-1.png';

export default function Section2() {
  const reveal = () => {
    const reveals = document.querySelectorAll('.boxes');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  return (
    <section id='education' className='section_2'>
      <img id='ed_img' src={bg} alt='' />
      <div className='boxes fade-bottom'>
        <div className='left-box'>
          <h4>Education</h4>
          <div className='img-container'>
            <img src={harvard} alt='' />
            <img className='uw_title' src={uw} alt='' />
          </div>
        </div>
        <div className='right-box'>
          <div className='img-container'>
            <a
              className='img_certificate left-cert'
              href={CS50}
              target='_blank'
              rel='noreferrer'
            >
              <img className='smallLogo' src={h} alt='' />
              <img className='certificate' src={CS50} alt='' />
            </a>
            <a
              className='img_certificate mid-cert'
              href={UWC}
              target='_blank'
              rel='noreferrer'
            >
              <img className='smallLogo' src={u} alt='' />
              <img className='certificate' src={UWC} alt='' />
            </a>
            <a
              className='img_certificate right-cert'
              href={CS50W}
              target='_blank'
              rel='noreferrer'
            >
              <img className='smallLogo' src={h} alt='' />
              <img className='certificate' src={CS50W} alt='' />
            </a>
          </div>
          <a
            href={MPA}
            className='button-orange'
            target='_blank'
            rel='noreferrer'
          >
            Internship
          </a>
        </div>
      </div>
    </section>
  );
}
