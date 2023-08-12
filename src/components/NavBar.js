import React, { useState, useEffect, useMemo } from 'react';
import '../styles/css/entry.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import audioFile from '../assets/bg_music.mp3';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/css/NavBar.css';

import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar(main) {
  const [isPaused, setIsPaused] = useState(true);
  const [entryClass, setEntryClass] = useState('show_entry');
  const [isMain] = useState(main.main);

  const toggle = (action) => {
    console.log('STARTS');
    let audioElement = document.getElementById('backgroundMusic');
    console.log(audioElement);
    if (audioElement) {
      if (action === 'play') audioElement.play();
      else audioElement.pause();
      setIsPaused(!isPaused);
    }
  };
  const enter = () => {
    setEntryClass('hide_entry');
    toggle('play');
  };

  const texts = useMemo(() => ['Loading...', 'Loading Complete'], []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    if (currentText === 'Loading Complete') {
      return; // Stop the timer
    }
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, currentText, texts]);

  return (
    <>
      <Navbar id='nav' collapseOnSelect expand='md'>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Brand
            href='https://ymmy1.github.io/'
            className='navbar-brand'
          >
            Portfolio
          </Navbar.Brand>
          <Nav className='navbar-nav ms-auto'>
            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link href='#education'>Education</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link href='#skills'>Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#projects'>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav-item ml-auto'>
              <Nav.Link
                className='nav-social-link'
                href='https://www.linkedin.com/in/oleg-nosyrev-440640114'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon fontSize='medium' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {isMain && (
                <audio id='backgroundMusic'>
                  <source src={audioFile} type='audio/mpeg' autoPlay />
                  Your browser does not support the audio element.
                </audio>
              )}
              {isPaused ? (
                <VolumeOffIcon
                  fontSize='medium'
                  onClick={() => toggle('play')}
                />
              ) : (
                <VolumeUpIcon
                  fontSize='medium'
                  onClick={() => toggle('pause')}
                />
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {isMain && (
        <section id='entry_section' className={'entry ' + entryClass}>
          <p>{currentText}</p>
          <button
            className='button-orange'
            onClick={() => {
              enter();
            }}
          >
            Enter Website
          </button>
        </section>
      )}
    </>
  );
}
