import './App.css';
import Footer from './components/Footer';
import FourthSection from './components/FourthSection';
import MainSection from './components/MainSection';
import Nav from './components/Nav';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection'


function App() {
  return (
    <div className="App">
      <Nav/>
      <MainSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/>
    </div>
  );
}

export default App;
