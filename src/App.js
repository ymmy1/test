import './styles/css/App.css';
import Section1 from './components/Sakura.js';
import Section2 from './components/Education.js';

function App() {
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
    <>
      <Section1 {...myBlossomSceneConfig} />
      <Section2 />
    </>
  );
}

export default App;
