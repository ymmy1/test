import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import audioFile from '../assets/bg_music.mp3';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/css/NavBar.css';

import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar(main) {
  console.log(main.main);
  const [isPaused, setIsPaused] = useState(true);
  const [isFooter] = useState(main.main);

  const toggle = (action) => {
    let audioElement = document.getElementById('backgroundMusic');
    if (audioElement) {
      if (action === 'play') audioElement.play();
      else audioElement.pause();
      setIsPaused(!isPaused);
    }
  };
  return (
    <Navbar id='nav' collapseOnSelect expand='md'>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Brand href='https://ymmy1.github.io/' className='navbar-brand'>
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
            {isFooter && (
              <audio id='backgroundMusic' controls autoPlay>
                <source src={audioFile} type='audio/mpeg' />
                Your browser does not support the audio element.
              </audio>
            )}
            {isPaused ? (
              <VolumeOffIcon fontSize='medium' onClick={() => toggle('play')} />
            ) : (
              <VolumeUpIcon fontSize='medium' onClick={() => toggle('pause')} />
            )}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
