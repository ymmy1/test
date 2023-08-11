import React, { useEffect } from 'react';

import '../styles/css/skills.css';

import { main, other } from './API/skills';

export default function Section2() {
  const reveal = () => {
    const reveals = document.querySelectorAll('.skillsbox');

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
    <section id='skills' className='section_3'>
      <div className='skillsbox fade-bottom'>
        <h4>Main Skills</h4>
        <div className='main-skills'>
          {main.map((skill, index) => (
            <div key={index} className='skill-box'>
              <img src={skill.icon} alt='aws' />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <h4>Other Skills</h4>
        <div className='other-skills'>
          {other.map((skill, index) => (
            <div key={index} className='skill-box'>
              <img src={skill.icon} alt='aws' />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
