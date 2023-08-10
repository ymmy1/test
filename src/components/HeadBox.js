import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../styles/css/headbox.css';
import resume from '../assets/Oleg_Nosyrev_Resume.pdf';

export default function HeadBox() {
  return (
    <div className='head-box'>
      <h1>Oleg Nosyrev</h1>
      <p>Senior Front End Engineer</p>
      <a className='button-orange' href={resume} download>
        <FileDownloadIcon fontSize='medium' color='#fff' /> Resume
      </a>
    </div>
  );
}
