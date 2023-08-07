import React from 'react';
import '../styles/css/sakura.css';
import '../styles/css/main.css';
import audioFile from '../assets/bg_music.mp3';
import rocks from '../assets/rocks.png';

export default function BlossomSceneComponent(props) {
  // future sakura leaves code
  // useEffect(() => {
  //   const audioElement = document.getElementById('backgroundMusic');
  //   if (audioElement) {
  //     console.log('useeffect');
  //     audioElement.play();
  //     // audioElement.muted = !audioElement.muted;
  //   }
  // });
  const play = () => {
    const audioElement = document.getElementById('backgroundMusic');
    if (audioElement) {
      console.log('useeffect');
      audioElement.play();
    }
  };
  return (
    <section className='section_1'>
      <span>TEST</span>
      <audio id='backgroundMusic' controls autoPlay>
        <source src={audioFile} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <button onClick={() => play()}>Play</button>
      <img className='rocks' src={rocks} alt='' />
    </section>
  );
}
