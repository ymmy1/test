import React, { useState } from 'react';
import '../styles/css/projects.css';
import bg from '../assets/projects.png';
import { Parallax } from 'react-parallax';
import resume from '../assets/Oleg_Nosyrev_Resume.pdf';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ProjectBox from './ProjectBox';
import ProjectModal from './ProjectModal';

import { api } from './API/projectsApi';

export default function Projects() {
  const [opennedProject, setOpennedProject] = useState({});
  const handleOpen = (api) => {
    setOpennedProject(api);
  };
  const handleClose = () => setOpennedProject({});

  return (
    <Parallax strength={150} bgImage={bg}>
      <section id='projects' className='section_4'>
        <span>Projects</span>
        <div className='all_projects'>
          {api.map((api, index) => (
            <ProjectBox api={api} key={index} handleOpen={handleOpen} />
          ))}
          <div className='bottom-section'>
            <p className='bottom_text'>Find Out More</p>
            <div className='bottom_buttons'>
              <a
                className='button-orange'
                href='https://www.linkedin.com/in/oleg-nosyrev-440640114'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon fontSize='medium' color='#fff' />
                LinkedIn
              </a>
              <a className='button-orange' href={resume} download>
                <FileDownloadIcon fontSize='medium' color='#fff' /> Resume
              </a>
            </div>
          </div>
          <ProjectModal
            opennedProject={opennedProject}
            handleClose={handleClose}
          />
        </div>
      </section>
    </Parallax>
  );
}
