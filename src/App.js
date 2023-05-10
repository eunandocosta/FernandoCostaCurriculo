import './App.css';
import Footer from './components/Footer';
import FourthSection from './components/FourthSection';
import MainSection from './components/MainSection';
import Nav from './components/Nav';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection'
import { useRef } from 'react';


function App() {
  const main = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Nav scrollToSection={scrollToSection} />
      <MainSection ref={main} />
      <SecondSection ref={second} />
      <ThirdSection ref={third} />
      <FourthSection ref={fourth} />
      <Footer />
    </div>
  );
}

export default App;
