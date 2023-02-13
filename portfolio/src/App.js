import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Socialmedia from './components/Socialmedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
          
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Socialmedia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
