import React from 'react';

import './styles/css/App.css';
import Section1 from './components/Sakura.js';
import Section2 from './components/Education.js';
import Section3 from './components/Skills.js';
import Section4 from './components/Projects.js';
import Footer from './components/Footer.js';

import useScroll from './hooks/useScroll';

function App() {
  const containerRef = React.createRef();

  // eslint-disable-next-line no-empty-pattern
  const [] = useScroll(containerRef, {
    snapDestinationY: '100vh',
    duration: 1000,
  });
  const petalsTypes = [
    'petal-style1',
    'petal-style2',
    'petal-style3',
    'petal-style4',
  ];
  const myBlossomSceneConfig = {
    id: 'blossom_container',
    numPetals: 5,
    petalsTypes,
    gravity: 0.8,
    windMaxSpeed: 4,
  };

  return (
    <div id='main_container' ref={containerRef}>
      <Section1 {...myBlossomSceneConfig} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
