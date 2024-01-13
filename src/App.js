import './App.css';
import Landing from './components/Landing';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contact';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Landing/>
      <div className="spacer layer1"/>
      <About/>
      <div className="spacer layer2"/>
      <Projects/>
      <div className="spacer layer3"/>
      <Contacts/>
    </div>
  );
}

export default App;
