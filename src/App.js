import React from 'react';

import './styles/css/App.css';
import Section1 from './components/Sakura.js';
import Section2 from './components/Education.js';
import Section3 from './components/Skills.js';
import Section4 from './components/Projects.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div id='main_container'>
      {/* <div id='main_container' ref={containerRef}> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
