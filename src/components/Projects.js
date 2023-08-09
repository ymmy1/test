import '../styles/css/projects.css';
import bg from '../assets/projects.png';
import { Parallax } from 'react-parallax';

export default function Projects() {
  return (
    <Parallax strength={150} bgImage={bg}>
      <section id='projects' className='section_4'>
        {/* <img id='pr_img' src={bg} alt='' /> */}
        <span>Projects</span>
      </section>
    </Parallax>
  );
}
