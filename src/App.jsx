import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />

      <main className="content-wrapper">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
