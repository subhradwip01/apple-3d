import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './Sections/Quote';
import HeroSection from './Sections/HeroSection';
import Drone from './Sections/Drone';
import DesignSection from './Sections/DesignSection';
import FLyingSection from './Sections/FLyingSection';
import HardwareSection from './Sections/HardwareSection';
import PowerSection from './Sections/PowerSection';
import ColorSection from './Sections/ColorSection';


function App() {
  return (
    <>
     <GlobalStyle/>
     <Quote/>
     <HeroSection/>
     <DesignSection/>
     <FLyingSection/>
     <HardwareSection/>
     <PowerSection/>
     <ColorSection/>
     <Drone/>
     </>
    
  );
}

export default App;
