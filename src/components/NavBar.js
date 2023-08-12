import React, { useState, useEffect } from 'react';
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

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const checkLoadingStatus = () => {
      if (document.readyState === 'complete') {
        setLoadingComplete(true);
      }
    };

    const interval = setInterval(checkLoadingStatus, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
          <p>
            {loadingComplete
              ? 'Website Loaded'
              : `Loading ${Math.min(
                  Math.floor((Date.now() / 5000) * 100),
                  100
                )}%`}
          </p>
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
