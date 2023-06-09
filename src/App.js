import './App.css';
import Footer from './components/Footer';
import FourthSection from './components/FourthSection';
import MainSection from './components/MainSection';
import Nav from './components/Nav';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import { useRef } from 'react';


function App() {
  const third = useRef(null);
  const fourth = useRef(null);

  const scrollToSection = (section) => {
    try {
      if (section.current !== null) {
        window.scrollTo({
          top: section.current.offsetTop,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Nav scrollToSection={scrollToSection} thirdRef={third} fourthRef={fourth} />
      <MainSection />
      <SecondSection />
      <ThirdSection ref={third} />
      <FourthSection ref={fourth} />
      <Footer />
    </div>
  );
}

export default App;
