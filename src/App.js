import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './Sections/Quote';
import HeroSection from './Sections/HeroSection';
import Drone from './Sections/Drone';

function App() {
  return (
    <>
     <GlobalStyle/>
     <Quote/>
     <HeroSection/>
     <Drone/>
     </>
    
  );
}

export default App;
